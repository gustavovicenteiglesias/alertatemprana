import { useEffect, useState } from "react";
import { get } from "./Tiempo";
import { APIResponse, Dia, Forescast,  APISituacion } from "./Tipos";




export const useGetForescast = () => {
    const [extendido , setExtendido] = useState<Forescast[]>([]);
    const getData = async () => {
      const { forecast } = await get<APIResponse>('https://pure-crag-50511.herokuapp.com/v1/getPronostico');
      setExtendido(forecast)
      }
    useEffect(()=>{
      
    getData()
      
    },[]);
  
    return extendido;
  }

export const useGetDia=()=>{

  const [dia,setDia] = useState<Dia>();
  const apiDia ="https://pure-crag-50511.herokuapp.com/v1/getDia"; 
    const getData = async () => {
      const dias = await get<Dia>(apiDia);
      setDia(dias)
      }
 
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 100000);
        return () => clearInterval(interval);
},[]);
  return dia;
}

export const useGetSituacion=()=>{

  const [situacion,setSituacion] = useState<APISituacion>();
  const url ="https://pure-crag-50511.herokuapp.com/v1/situacion/ultimo"; 
    const getData = async () => {
      const situaciones = await get<APISituacion>(url);
      setSituacion(situaciones)
      }
 
      useEffect(()=>{
        getData()
        const interval = setInterval(() => {
          getData()
          
        }, 100000);
        return () => clearInterval(interval);
},[]);
  return situacion;
}
