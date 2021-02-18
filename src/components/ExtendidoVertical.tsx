import React from 'react';
import { IonCol,  IonDatetime, IonGrid,  IonIcon, IonRow, IonThumbnail } from '@ionic/react';

import './Extendido.css';
import { water } from 'ionicons/icons';
import { useGetDia, useGetForescast } from '../hooks/Consultas';



const Extendido: React.FC = () => {
 
  const Linea=()=>{
    return ( 
    
           <hr style={{
    color: '#rgba(82, 82, 81, 0.30)',
    backgroundColor: 'rgba(82, 82, 81, 0.30)',
    height: .5,
    borderColor : 'rgba(82, 82, 81, 0.30)',
   }}/>
    
    )
  }
    
  
  
  const data= useGetForescast()
  const diahoy= useGetDia()
  let diasemana="DOMINGO,LUNES,MARTES,MIERCOLES,JUEVES,VIERNES,SABADO"
  if(window.screen.width < 1000)diasemana="DOM,LUN,MAR,MIE,JUE,VIE,SAB";
  if (data.length === 0) return null;
  
  let dh=null;
  let dhdescription=null;
   if (typeof(diahoy?.weather.id) === 'undefined') {
      dh="3";
      dhdescription="";
  }else{
       dh=diahoy?.weather.id
       dhdescription=diahoy?.weather.description;
   }
  
   let visible=false;
   let lluvia=[];
   if(data[0].morning === null){
       visible=true
       lluvia=[0,0]
       
   }else{
     
     visible=false;
     lluvia[0]=data[0]?.morning.rain_prob_range[0];
     lluvia[1]= data[0]?.morning.rain_prob_range[1];
   }
   
   const Icono1=()=>{
    return <IonIcon icon={water} ariaLabel="Probabilidad de precipitaciones"  size="small" hidden={visible} />
   }
    
   
   const Icono =()=>{
    return <IonIcon icon={water} ariaLabel="Probabilidad de precipitaciones"  size="small" hidden={false} />
  }
  return (
    
    <>
      
      
        <IonGrid>
        <IonRow>
          {/*dia0*/}
            
           <IonCol className="extendidoVertical"  >
             
              <IonDatetime value={data[0]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"
              
              >
              </IonDatetime>
              <div className="texto" >
                <span >MIN  {data[0].temp_min}° </span>
                
              </div>  
              <div className="texto">
                <span >MAX  {data[0].temp_max}° </span>
              <Linea/>
              <IonThumbnail  className="foto" >
              <img alt={dhdescription} src={require('../assest/image/'+dh+'.png')} width="auto" height="40" hidden={visible} />
              </IonThumbnail>
              </div>
              
              <IonRow   className="lluvia"  >
              <Icono1/>
              
                    <div className="texto" hidden={visible} >
                    {lluvia[0] }-{lluvia[1]}%
                    </div>
                    <br hidden={!visible}/>
              
              </IonRow>
              <Linea/>
              
              <IonThumbnail className="foto">
              <img alt={data[0]?.night.weather.description} src={require('../assest/image/'+data[0]?.night.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[0]?.night.rain_prob_range[0]}-{data[0]?.night.rain_prob_range[1]}%
              </div>
                </IonRow>
               
            </IonCol>
              {/*dia1*/}
           <IonCol className="extendidoVertical" >
             
              <IonDatetime value={data[1]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"

              >
              </IonDatetime>
              <div className="texto">
                MIN  {data[1].temp_min}° 
              </div>  
              <div className="texto">
                MAX  {data[1].temp_max}° 
              </div>
              <Linea/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt={data[1]?.morning.weather.description} src={require('../assest/image/'+data[1]?.morning.weather.id+'.png')}
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[1]?.morning.rain_prob_range[0]}-{data[1]?.morning.rain_prob_range[1]}%
              </div>
              </IonRow>
              <Linea/>
              </div>
              <IonThumbnail className="foto">
              <img alt={data[1]?.afternoon.weather.description} src={require('../assest/image/'+data[1]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[1]?.afternoon.rain_prob_range[0]}-{data[1]?.afternoon.rain_prob_range[1]}%
              </div>
                </IonRow>
               
            </IonCol>
         {/*dia2*/}
         <IonCol className="extendidoVertical" >
             
              <IonDatetime value={data[2]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"
              >
              </IonDatetime>
              <div className="texto">
                MAX  {data[2].temp_min}° 
              </div>  
              <div className="texto">
                MIN {data[2].temp_max}° 
              </div>
              <Linea/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt={data[2]?.morning.weather.description} src={require('../assest/image/'+data[2]?.morning.weather.id+'.png')} 
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[2]?.morning.rain_prob_range[0]}-{data[2]?.morning.rain_prob_range[1]}%
              </div>
              </IonRow>
              <Linea/>
              </div>
              <IonThumbnail className="foto">
              <img alt={data[2]?.afternoon.weather.description}  src={require('../assest/image/'+data[2]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[2]?.afternoon.rain_prob_range[0]}-{data[2]?.afternoon.rain_prob_range[1]}%
              </div>
                </IonRow>
              
            </IonCol>
            {/*dia3*/}
           <IonCol  className="extendidoVertical" >
           <IonDatetime value={data[3]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"
              >
              </IonDatetime>
              <div className="texto">
                MIN  {data[3].temp_min}° 
              </div>  
              <div className="texto">
                MAX  {data[3].temp_max}° 
              </div> 
              <Linea/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt={data[3]?.morning.weather.description} src={require('../assest/image/'+data[3]?.morning.weather.id+'.png')} 
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
                    {data[3]?.morning.rain_prob_range[0]}-{data[3]?.morning.rain_prob_range[1]}%
                    </div>
              </IonRow>
              <Linea/>
              </div>
              <IonThumbnail className="foto">
              <img alt={data[3]?.afternoon.weather.description} src={require('../assest/image/'+data[3]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <Icono/>
              <div className="texto">
              {data[3]?.afternoon.rain_prob_range[0]}-{data[3]?.afternoon.rain_prob_range[1]}%
              </div>
             </IonRow>
            
               
            </IonCol>
            
        </IonRow>
        </IonGrid>
        
          
    </>
  );
};

export default Extendido
