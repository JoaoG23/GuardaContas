import React from 'react';
import { PieChart, Pie} from 'recharts';
  
  
const GraficoForTipo = () => {
  
// Sample data
const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];
  
  
return (
  <PieChart width={170} height={170}>
  <Pie data={data} dataKey="students" outerRadius={70} fill='rgba(4, 131, 242, 0.5)' >
  </Pie>
</PieChart>
  );
}
  
export default GraficoForTipo;