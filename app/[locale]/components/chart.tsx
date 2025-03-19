import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Définir une interface pour les objets de données
interface DataPoint {
  date: string;
  price: number;
}

// Typiser les props du composant Example
interface ExampleProps {
  data: DataPoint[];
}

const Example: React.FC<ExampleProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <XAxis dataKey="date" tickLine={false}/>
        <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => {return `$${Intl.NumberFormat("en-US").format(value)}`}}/>
        <Tooltip content={({active, payload}) => {
          if(!active || !payload || payload.length === 0){
            return null
          }

          return(
            <div id='tooltip'>
              <h2>{payload[0].payload.date}</h2>
              <p id='price_tooltip'>Savings : <b>${Intl.NumberFormat("en-US").format(payload[0].payload.price)}</b></p>
            </div>
          )
        }}/>
        <Legend />
        <Area type="monotone" name='Savings' dataKey="price" stroke="rgba(108,222,248,1)" fill={`url(#price_gradient)`} />
        <defs>
          <linearGradient id='price_gradient' x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor='rgba(108,222,248,1)'/>
            <stop offset={0.9} stopColor='rgba(108,222,248,1)' stopOpacity={0.15}/>
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Example;