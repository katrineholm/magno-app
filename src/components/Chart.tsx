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
    translation: any;
    testType: string;
    riskAverages: {[key: string] : number};
}

const Chart = observer( (props: ChartProps) => {
  const dateConfig = {day: 'numeric', month: "short", year: "2-digit"} as const

  function formatData(){
    if (props.riskScores === undefined || props.riskScores.length < 1){
      return undefined
    }
    const data : {score: string, date: string}[] | undefined = [];
    const dates : Array<string> = [];
    let counter = 1;
    props.riskScores.forEach(element => {
      if (dates.includes(new Date(element.date).toLocaleDateString(props.translation.localeDateString, dateConfig))){
        dates.push(new Date(element.date).toLocaleDateString(props.translation.localeDateString, dateConfig) + " " + counter)
        data.push({
          score: element.score,
          date: new Date(element.date).toLocaleDateString(props.translation.localeDateString, dateConfig) + " +" + counter
        })
        counter += 1;
      }
      else{
        dates.push(new Date(element.date).toLocaleDateString(props.translation.localeDateString, dateConfig))
        data.push({
          score: element.score,
          date: new Date(element.date).toLocaleDateString(props.translation.localeDateString, dateConfig)
        })
      }
      
    });
    return data;
  }

  function getAverageLine(){
    if (props.testType.includes("Motion")){
      return props.riskAverages["motion"]
    }
    else if (props.testType.includes("Form Fixed")){
      return props.riskAverages["form_fixed"]
    }
    else if (props.testType.includes("Form Random")){
      return props.riskAverages["form_random"]
    }
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
          <ReferenceLine y={getAverageLine()} label={{value: props.translation.chart.averageLabel, position: "insideRight"}} stroke="#ff7300" strokeDasharray="3 3" />
        </ComposedChart>
        </ResponsiveContainer>
    );
  });

export default (Chart);