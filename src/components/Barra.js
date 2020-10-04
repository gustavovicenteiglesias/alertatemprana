import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './Dibujo.css'
import { useGetSituacion } from '../hooks/Consultas';

const data = [
  {
    name: 'Page A', uv: 3
  },

];


function Barra (){
  const data1=useGetSituacion();
  
  
    
    return (
      <BarChart
       
        width={360}
        height={300}
        data={[
          {
            name: 'Page A', uv:data1?.data.altura_fecha 
          },
        
        ]}
        margin={{
          top: 20, right: 0, left: 0, bottom: 20, 
        }}
        
        
      >
        
        
        <YAxis domain={[0, 6.5]} axisLine={false} tick={false} padding={{ right: 0, left: 0 }} /> 
        
        
        <Bar dataKey="uv" fill="rgb(37, 172, 196,0.5)" id="barra"  barSize={340} padding={{right:5}} />
      </BarChart>
    );
  
}
export default Barra;