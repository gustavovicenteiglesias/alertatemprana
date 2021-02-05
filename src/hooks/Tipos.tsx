/*export interface Forescasts {
    forecast:Forescast[],
    location:{},
    type:string,
    updated:Date
  }*/
  export interface AlertaMUltimo{
    data: {
      id: number,
      hora: string,
      fecha: string,
      titulo: string,
      zona: string,
      situacion:string,
      estado: number
      }
  }
  export interface AlertaMeteorologica{
    success: boolean,
    message: string,
    list:AlertaMUltimo[]
  }
  export interface Forescast {
    afternoon:{ 
      rain_prob_range:{
        0:number ,
        1:number 
      },
      weather:{
      description: string
      id: string | null
    } },
    date:string,
    early_morning: {},
    humidity_max: number,
    humidity_min: number,
    
    morning:{
      rain_prob_range:{
        0:number | null,
        1:number | null
      },
      weather:{
        description: string
        id: string 
      }
    }
    ,
    night:{
      rain_prob_range:{
        0:number | null,
        1:number | null
      },
      weather:{
        description: string
        id: string | null
      } 
    },
    temp_max: number,
    temp_min: number
  
  }
  
  export interface APIResponse {
    forecast:Forescast[]
  }
  //dia

  
  export interface Dia 
  {
   
    date: string,
    feels_like: number,
    humidity: number,
    location: {
      coord: {
        lat: number,
        lon: number
      },
      department: string,
      distance: number,
      id: number,
      name: string,
      province: string,
      type: string
    },
    pressure: string,
    station_id: number,
    temperature: number,
    visibility: number,
    weather: {
      description: string,
      id: string 
    },
    wind: {
      deg: number,
      direction: string,
      speed: number
    }
  }

 
 //Situacion
  export interface APISituacion{
    data: {
      id: number,
      hora: string,
      fecha: string,
      altura_fecha: number,
      situacion: string,
      estado_compuertas: string,
      estado_compuertas_porciento: string
      },
      success: boolean,
      message: string
    
  }
  export interface ApiRegistros{
    
      data: {
      id: number,
      hora: string,
      fecha: string,
      lluvia_hoy: number,
      lluvia_ayer: number,
      lluvia_mes: number,
      lluvia_ano: number
      },
      success: true,
      message: "Successful load"
      }

export interface ApiToken{
  id: number,
  token_android: string
}

  