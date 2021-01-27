


import React from 'react'
import './Dibujo.css';
import dibujo from '../assest/image/dibujoRio.png'
import { useGetSituacion } from '../hooks/Consultas';
const Dibujo : React.FC = () => {
  const data1= useGetSituacion()
 
  
  return (
    <div>
    <div className="alturario">
    <img alt="" src={dibujo} width="200" height="150" />
    </div>
    <div className="titulorio">
    <h5>Altura Rio  {data1?.data.altura_fecha} m</h5>
    <p className="compuerta">{data1?.data.situacion}</p>
    <p className="compuerta">Compuertas {data1?.data.estado_compuertas} </p>
    <p>al {data1?.data.estado_compuertas_porciento} %</p>
    </div>
    </div>
  )
  

  
  
  

}

export default Dibujo