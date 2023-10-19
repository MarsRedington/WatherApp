import { Color } from "@tremor/react";
import { Root } from "@/Types/types.d";

export type CountryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

export type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

export type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export type CalloutCardProps = {
  message: string;
  warning?: boolean;
};

export type StatCardProps = {
  title: string;
  metric: string;
  color?: Color;
};

export type InformationPanelProps = {
  city: string;
  results: Root;
  lat: string;
  long: string;
};

export type TempChartProps = {
  results: Root;
};
