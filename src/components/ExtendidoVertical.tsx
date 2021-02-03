import React, { useState,useEffect } from 'react';
import { IonAlert, IonAvatar, IonButton, IonCard, 
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonItemGroup, IonLabel, IonList, 
  IonListHeader, IonPage, IonProgressBar, IonRouterLink, IonRow, IonText,
   IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import './Extendido.css';
import { happy, water } from 'ionicons/icons';
import { useGetDia, useGetForescast } from '../hooks/Consultas';



const Extendido: React.FC = () => {
  
  const [showAlert1, setShowAlert1] = useState(true);
  const [pronostico, setPronostico] = useState();
  const data= useGetForescast()
  const diahoy= useGetDia()
  const diasemana="DOM,LUN,MAR,MIE,JUE,VIE,SAB"
  if (data.length === 0) return null;
  
  let dh=null;
   if (typeof(diahoy?.weather.id) === 'undefined') {
      dh="3";
  }else{
       dh=diahoy?.weather.id
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
              <div className="texto">
                Tmin  {data[0].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[0].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto" >
              <img alt="" src={require('../assest/image/'+dh+'.png')} width="auto" height="40" hidden={visible} />
              </IonThumbnail>
              </div>
              
              <IonRow   className="lluvia"  >
              <IonIcon icon={water}  size="small"hidden={visible} />
              
                    <div className="texto" hidden={visible} >
                    {lluvia[0] }-{lluvia[1]}%
                    </div>
                    <br hidden={!visible}/>
              
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              
              <IonThumbnail className="foto">
              <img alt="" src={require('../assest/image/'+data[0]?.night.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
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
                Tmin  {data[1].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[1].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt="" src={require('../assest/image/'+data[1]?.morning.weather.id+'.png')}
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              <div className="texto">
              {data[1]?.morning.rain_prob_range[0]}-{data[1]?.morning.rain_prob_range[1]}%
              </div>
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              </div>
              <IonThumbnail className="foto">
              <img alt="" src={require('../assest/image/'+data[1]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
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
                Tmin  {data[2].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[2].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt="" src={require('../assest/image/'+data[2]?.morning.weather.id+'.png')} 
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              <div className="texto">
              {data[2]?.morning.rain_prob_range[0]}-{data[2]?.morning.rain_prob_range[1]}%
              </div>
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              </div>
              <IonThumbnail className="foto">
              <img alt=""  src={require('../assest/image/'+data[2]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
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
                Tmin  {data[3].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[3].temp_max}° 
              </div> 
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt="" src={require('../assest/image/'+data[3]?.morning.weather.id+'.png')} 
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              <div className="texto">
                    {data[3]?.morning.rain_prob_range[0]}-{data[3]?.morning.rain_prob_range[1]}%
                    </div>
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              </div>
              <IonThumbnail className="foto">
              <img alt="" src={require('../assest/image/'+data[3]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
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
