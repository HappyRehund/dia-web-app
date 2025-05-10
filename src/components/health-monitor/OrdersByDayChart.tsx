"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    value: 12,
    bmi: 23,
    date: "2024-12-12",
  },
  {
    value: 25,
    bmi: 27,
    date: "2024-12-11",
  },
  {
    value: 5,
    bmi: 20,
    date: "2024-12-10",
  },
];
// date, glucoseLevel, bloodPressure, cholesterol, uricAcid
type Props = {
    data: {
        date: string,
        glucoseLevel: number,
        bloodPressure: number,
        cholesterol: number,
        uricAcid: number
    }
}

function OrdersByDayChart() {
  return (
    <ResponsiveContainer width="100%" minHeight={300}>
      <LineChart data={data} width={500} height={250}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" type="monotone" name="Total Gula Darah" />
        <Line dataKey="bmi" type="monotone" name="BMI" stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OrdersByDayChart;
