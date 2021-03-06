import React, { useState,useEffect } from 'react';
import { IonAlert, IonAvatar, IonButton, IonCard, 
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, 
  IonListHeader, IonPage, IonProgressBar, IonRouterLink, IonRow, IonText,
   IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import './Extendido.css';
import { happy, water } from 'ionicons/icons';
import { useGetDia, useGetForescast } from '../hooks/Consultas';



const ExtendidoUno: React.FC = () => {
  
  const [showAlert1, setShowAlert1] = useState(true);
  const [pronostico, setPronostico] = useState();
  const data= useGetForescast()
  const diahoy= useGetDia()
  const diasemana="Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado"
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
    
    < >
          <IonCard class="extendido">

          

               
               {/*Manana 5*/}
               <IonCardTitle class="titulo">
              <IonRow>
                <IonCol size="6">
            <IonDatetime  value={data[5]?.date} 
                  display-timezone="utc" 
                  day-names={diasemana}
                  displayFormat="DDDD D"
                  readonly={true} >
                  </IonDatetime>
                  </IonCol>
                  <IonCol size="6">
                  <IonLabel ><h4>Minima  {data[5].temp_min}° /  Maxima  {data[5].temp_max}°</h4></IonLabel>
             </IonCol>
          </IonRow>
            </IonCardTitle>

            <IonRow>
              <IonCol size="6">
                <IonItem lines="none">
                <IonThumbnail >
                  <img src={require('../assest/image/'+data[5]?.morning.weather.id+'.png')} width="40" height="40" />
                  </IonThumbnail>
                  <IonRow  slot="end">
                  <IonIcon icon={water}  size="small" />
                  <IonLabel color="light">
                    <h6>
                    {data[5]?.morning.rain_prob_range[0]}-{data[5]?.morning.rain_prob_range[1]}%
                    </h6>
                    </IonLabel>
                    </IonRow>
               </IonItem>
              </IonCol>

               <IonCol size="6">
                <IonItem lines="none">
                <IonThumbnail >
                  <img src={require('../assest/image/'+data[5]?.afternoon.weather.id+'.png')}   />
                </IonThumbnail>
                  <IonRow  slot="end">
                  <IonIcon icon={water}  size="small" />
                  <IonLabel color="light">
                    <h6>
                    {data[5]?.afternoon.rain_prob_range[0]}-{data[5]?.afternoon.rain_prob_range[1]}%
                    </h6>
                    </IonLabel>
                    </IonRow>
                 </IonItem>
              </IonCol>
            </IonRow>
               {/*Manana 6*/}
               <div className="extendido" >
               <IonCardTitle class="titulo">
              <IonRow>
                <IonCol size="6">
            <IonDatetime  value={data[6]?.date} 
                  display-timezone="utc" 
                  day-names={diasemana}
                  displayFormat="DDDD D"
                  readonly={true} >
                  </IonDatetime>
                  </IonCol>
                  <IonCol size="6">
                  <IonLabel ><h4>Minima  {data[6].temp_min}° /  Maxima  {data[6].temp_max}°</h4></IonLabel>
             </IonCol>
          </IonRow>
            </IonCardTitle>

            <IonRow >
              <IonCol size="6">
                <IonItem lines="none">
                <IonThumbnail >
                  <img src={require('../assest/image/'+data[6]?.morning.weather.id+'.png')} width="40" height="40" />
                  </IonThumbnail>
                  <IonRow  slot="end">
                  <IonIcon icon={water}  size="small" />
                  <IonLabel color="light">
                    <h6>
                    {data[6]?.morning.rain_prob_range[0]}-{data[6]?.morning.rain_prob_range[1]}%
                    </h6>
                    </IonLabel>
                    </IonRow>
               </IonItem>
              </IonCol>

               <IonCol size="6">
                <IonItem lines="none">
                <IonThumbnail >
                  <img src={require('../assest/image/'+data[6]?.afternoon.weather.id+'.png')}   />
                </IonThumbnail>
                  <IonRow  slot="end">
                  <IonIcon icon={water}  size="small" />
                  <IonLabel color="light">
                    <h6>
                    {data[6]?.afternoon.rain_prob_range[0]}-{data[6]?.afternoon.rain_prob_range[1]}%
                    </h6>
                    </IonLabel>
                    </IonRow>
                 </IonItem>
              </IonCol>
            </IonRow>
            </div>
            </IonCard>  
    

        
  
        
          
    </>
  );
};

export default ExtendidoUno
