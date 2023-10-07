import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Donation"],
  ["Food", 11],
  ["Entertainment", 2],
  ["Medical Support", 2],
  ["Clean Water", 2],
  ["Education", 7],
];

export const options = {
  title: "Donation Ratio",
  backgroundColor: 'transparent',
};

export function Pie() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
