import React, { useState,useEffect } from 'react';
import { IonAlert, IonAvatar, IonButton, IonCard, 
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, 
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
 
  return (
    
    < >
      
      

        <IonRow>
           <IonCol size="3">
            <IonCard class="extendido">
              <IonItem >
               <IonDatetime value={data[0]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" ></IonDatetime>
              </IonItem>
            <IonItem >
            <IonThumbnail>
            <img src={require('../assest/image/'+dh+'.png')} width="auto" height="40"/>
                 </IonThumbnail>
                
            </IonItem>
            <IonItem>
            <IonThumbnail>
            <img src={require('../assest/image/'+data[0]?.night.weather.id+'.png')} width="auto" height="40"  />
           </IonThumbnail>
            </IonItem>
            <IonItem>
            <IonIcon icon={water} slot="start" size="small" />
            <IonText color="light">
                {data[1]?.morning.rain_prob_range[1]}%
           </IonText>
           
            </IonItem>
           
            </IonCard>  
          </IonCol>
          <IonCol size="3">
            <IonCard class="extendido" >
              <IonItem >
               <IonDatetime value={data[1]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" ></IonDatetime>
              </IonItem>
            <IonItem lines="full">
            <IonThumbnail>
            <img src={require('../assest/image/'+data[1]?.morning.weather.id+'.png')} width="auto" height="40"/>
                 </IonThumbnail>
                
            </IonItem>
            <IonItem>
            <IonThumbnail>
            <img src={require('../assest/image/'+data[1]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
           </IonThumbnail>
            </IonItem>
            <IonItem>
            <IonIcon icon={water} slot="start" size="small" />
            <IonText color="light">
            {data[1]?.morning.rain_prob_range[1]}%
           </IonText>
           
            </IonItem>
           
            </IonCard>  
          </IonCol>
          <IonCol size="3">
            <IonCard class="extendido">
              <IonItem >
               <IonDatetime value={data[2]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" ></IonDatetime>
              </IonItem>
            <IonItem lines="full">
            <IonThumbnail>
            <img src={require('../assest/image/'+data[2]?.morning.weather.id+'.png')} width="auto" height="40"/>
                 </IonThumbnail>
                
            </IonItem>
            <IonItem>
            <IonThumbnail>
            <img src={require('../assest/image/'+data[2]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
           </IonThumbnail>
            </IonItem>
            <IonItem>
            <IonIcon icon={water} slot="start" size="small" />
            <IonText color="light">
            {data[2]?.morning.rain_prob_range[1]}%
           </IonText>
           
            </IonItem>
           
            </IonCard>  
          </IonCol>

          <IonCol size="3">
            <IonCard class="extendido">
              <IonItem >
               <IonDatetime value={data[3]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" ></IonDatetime>
              </IonItem>
            <IonItem lines="full">
            <IonThumbnail>
            <img src={require('../assest/image/'+data[3]?.morning.weather.id+'.png')} width="auto" height="40"/>
                 </IonThumbnail>
                
            </IonItem>
            <IonItem>
            <IonThumbnail>
            <img src={require('../assest/image/'+data[3]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
           </IonThumbnail>
            </IonItem>
            <IonItem>
            <IonIcon icon={water} slot="start" size="small" />
            <IonText color="light">
            {data[3]?.morning.rain_prob_range[1]}%
           </IonText>
           
            </IonItem>
           
            </IonCard>  
          </IonCol>

        </IonRow>
  
        
          
    </>
  );
};

export default Extendido
