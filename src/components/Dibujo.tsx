


import React from 'react'
import './Dibujo.css';
import dibujo from '../assest/image/dibujoRio.png'
import { useGetSituacion } from '../hooks/Consultas';
const Dibujo : React.FC = () => {
  const data1= useGetSituacion()
 
  
  return (
    <div>
    <div className="alturario">
    <img src={dibujo} width="300" height="250" />
    </div>
    <div className="titulorio">
    <h3>Altura Rio  {data1?.data.altura_fecha}</h3>
    <h5>{data1?.data.situacion}</h5>
    <h5>Compuertas abiertas al {data1?.data.estado_compuertas_porciento} %</h5>
    </div>
    </div>
  )
  

  
  
  

}

export default Dibujo