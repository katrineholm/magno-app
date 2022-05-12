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
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
    riskScores: {score: string, date: Date}[] | undefined;
}

const Chart = observer( (props: ChartProps) => {
  const dateConfig = {day: 'numeric', month: "short", year: "2-digit"} as const

  function formatData(){
    if (props.riskScores === undefined || props.riskScores.length < 1){
      return undefined
    }
    const data : {score: string, date: string}[] | undefined = [];
    props.riskScores.forEach(element => {
      data.push({
        score: element.score,
        date: new Date(element.date).toLocaleDateString('nb-NO', dateConfig)
      })
    });
    return data;
  }

    return (
      <ResponsiveContainer width="95%" height={400}>
        <ComposedChart
          width={500}
          height={350}
          data={formatData()}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis type="number" domain={[0, 100]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="score" barSize={20} fill="#448894" label={{position: "top"}}/>
          <ReferenceLine y={33} label={{value: "Gjennomsnitt", position: "insideRight"}} stroke="#ff7300" strokeDasharray="3 3" />
        </ComposedChart>
        </ResponsiveContainer>
    );
  });

export default (Chart);