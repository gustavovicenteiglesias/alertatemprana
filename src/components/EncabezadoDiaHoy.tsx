import React, { useState,useEffect } from 'react';
import { IonCol,IonHeader, IonItem, IonLabel, IonPage,  IonRow, IonText,
  IonThumbnail,
            IonTitle, IonToolbar } from '@ionic/react';

import './Extendido.css';

import { useGetDia, useGetForescast } from '../hooks/Consultas';



const EncabezadoDiaHoy: React.FC = () => {
    const diahoy= useGetDia()
    let dh=null;
    if (typeof(diahoy?.weather.id) === 'undefined') {
     dh="20";
    }else{
      dh=diahoy?.weather.id
    }
 
  return (
    
    < >
      
        <IonToolbar >
        <IonItem>
          <IonThumbnail slot="start">
            <img src={require('../assest/image/'+dh +'.png')} />
          </IonThumbnail>
            <IonLabel>
              <IonText color="light">
              <h1>{diahoy?.temperature}°</h1>
              </IonText>
            </IonLabel>
            <IonThumbnail slot="end">
            <img src={require('../assest/image/logofull.png') } width="40" height="40" />
          </IonThumbnail>
        </IonItem>
          
        </IonToolbar>
     
     
     
    </>
  );
};

export default EncabezadoDiaHoy
