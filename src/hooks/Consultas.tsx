import { useEffect, useState } from "react";
import { get } from "./Tiempo";
import { APIResponse, Dia, Forescast,  APISituacion, ApiRegistros, AlertaMUltimo } from "./Tipos";


export const useGetAM = () => {
  const [aMeteologico , setAMeteologico ] = useState<AlertaMUltimo>();
  const getData = async () => {
    const  alertas = await get<AlertaMUltimo>('http://webnueva.areco.gob.ar:9526/v1/alertameteorologico/ultimo');
    setAMeteologico(alertas)
    }
    useEffect(()=>{
      getData()
      const interval = setInterval(() => {
        getData()
        
      }, 1000000);
      return () => clearInterval(interval);
},[]);

  return aMeteologico;
}

export const useGetForescast = () => {
    const [extendido , setExtendido] = useState<Forescast[]>([]);
    const getData = async () => {
      const { forecast } = await get<APIResponse>('http://webnueva.areco.gob.ar:9526/v1/getPronostico');
      setExtendido(forecast)
      }
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 1000000);
        return () => clearInterval(interval);
},[]);
  
    return extendido;
  }

export const useGetDia=()=>{

  const [dia,setDia] = useState<Dia>();
  const apiDia ="http://webnueva.areco.gob.ar:9526/v1/getDia"; 
    const getData = async () => {
      const dias = await get<Dia>(apiDia);
      setDia(dias)
      }
 
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 1000000);
        return () => clearInterval(interval);
},[]);
  return dia;
}

export const useGetSituacion=()=>{

  const [situacion,setSituacion] = useState<APISituacion>();
  const url ="http://webnueva.areco.gob.ar:9526/v1/situacion/ultimo"; 
    const getData = async () => {
      const situaciones = await get<APISituacion>(url);
      setSituacion(situaciones)
      }
 
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 1000000);
        return () => clearInterval(interval);
},[]);
  return situacion;
}
export const useGetRegistros=()=>{
  const [registro,setRegistros] = useState<ApiRegistros>();
  const url ="http://webnueva.areco.gob.ar:9526//v1/registros/ultimo"; 
    const getData = async () => {
      const registros = await get<ApiRegistros>(url);
      setRegistros(registros)
      }
 
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 1000000);
        return () => clearInterval(interval);
},[]);
  return registro;
}
