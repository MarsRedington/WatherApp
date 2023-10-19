"use client";

import React from "react";
import { Card, Metric, Text } from "@tremor/react";
import { StatCardProps } from "@/Types/types";

function StatCard({ title, metric, color }: StatCardProps) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
