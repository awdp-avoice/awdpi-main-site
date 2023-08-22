import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", EndCase: 9.9, NewCase: 3.5 },
  { name: "Feb", EndCase: 1, NewCase: 9.9 },
  { name: "Mar", EndCase: 8, NewCase: 6.5 },
  { name: "Apr", EndCase: 1, NewCase: 6.8 },
  { name: "May", EndCase: 4, NewCase: 3.9 },
];

export const AreaCharts = () => {
  return (
    <ResponsiveContainer width={600} height={500}>
      <AreaChart
        width={600}
        height={500}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF4646" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF4646" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4E55FE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4E55FE" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#939393"
          tick={{ fontSize: "12px" }}
        />
        <YAxis
          tickCount={6}
          axisLine={false}
          tickLine={false}
          stroke="#939393"
          tick={{ fontSize: "12px" }}
        />
        <Tooltip />
        <Legend
          width={250}
          wrapperStyle={{
            top: -40,
            left: 40,
            lineHeight: "40px",
            fontSize: "12px",
          }}
        />
        <Area
          type="monotone"
          dataKey="NewCase"
          stroke="#FF4646"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="EndCase"
          stroke="#4E55FE"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
