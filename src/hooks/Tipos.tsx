/*export interface Forescasts {
    forecast:Forescast[],
    location:{},
    type:string,
    updated:Date
  }*/
  export interface Forescast {
    afternoon:{ 
      rain_prob_range:{
        0:number,
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
        0:number,
        1:number
      },
      weather:{
        description: string
        id: string | null
      }
    },
    night:{
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

  export interface Dias{
    

  }
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
      id: string | "3"
    },
    wind: {
      deg: number,
      direction: string,
      speed: number
    }
  }

 
 
  export interface APIResponseDia{

    
  }