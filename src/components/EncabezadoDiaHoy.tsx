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
        </IonItem>
          {/*<IonRow>
            <IonCol size="3">
          <IonText><h4>{diahoy?.temperature}°</h4></IonText>
            </IonCol>
            
            <IonCol size="3">
          <img src={require('../assest/image/'+dh +'.png')}width="40" 
          height="40" ></img>
            </IonCol>

            <IonCol size="6">
            <IonText>{diahoy?.weather.description}</IonText>
            </IonCol>
          </IonRow>*/}
        </IonToolbar>
     
     
     
    </>
  );
};

export default EncabezadoDiaHoy
