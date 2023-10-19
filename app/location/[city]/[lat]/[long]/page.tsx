import React from "react";
import { Props } from "@/Types/types";
import { Root } from "@/Types/types.d";
import { getClient } from "@/apllo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: true,
      longitude: long,
      latitude: lat,
      timezone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    },
  });
  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} results={results} lat={lat} long={long} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {""}
              {new Date(results.current.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
              color="yellow"
            />
            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color="green"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  warning
                  message={"The UV is hight today, be sure to wear SPF!"}
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${results.current.windspeed_10m.toFixed(1)}m/s`}
                color="cyan"
              />
              <StatCard
                title="Wind Derection"
                metric={`${results.current.winddirection_10m.toFixed(1)}`}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5"></hr>
        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
