"use client";

import { InformationPanelProps } from "@/Types/types";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";
import Image from "next/image";
import weatherCodeToString from "@/lib/weatherCodeToString";

function InformationPanel({ city, lat, long, results }: InformationPanelProps) {
  return (
    <div className="bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold mb-3">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400">
          Long/Lat: {long}/{lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10"></hr>
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5"></hr>
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current.temperature_2m.toFixed(1)} C
            </p>
            <p className="text-right font-extralight text-lg">
              {weatherCodeToString[results.current.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight"> Sunrise </p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]">
          <MoonIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight"> Sunset </p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
