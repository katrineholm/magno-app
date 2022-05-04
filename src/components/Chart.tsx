import React from 'react';
import {observer} from 'mobx-react';
import {
  ComposedChart,
  ReferenceLine,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 590,
  },
  {
    name: 'Page B',
    uv: 868,
  },
  {
    name: 'Page C',
    uv: 1397,
  },
  {
    name: 'Page D',
    uv: 1480,
  },
  {
    name: 'Page E',
    uv: 1520,
  },
  {
    name: 'Page F',
    uv: 1400,
  },
];

interface ChartProps {
    riskScores: number[];
}

const Chart = observer( (props: ChartProps) => {

    return (
        <ComposedChart
          width={500}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#448894" />
          <ReferenceLine y={500} label="Gjennomsnitt" stroke="#ff7300" strokeDasharray="3 3" />
        </ComposedChart>
    );
  });

export default (Chart);