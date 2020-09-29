import React, { useState,useEffect } from 'react';
import { IonCol,IonHeader, IonPage,  IonRow, IonText,
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
      <IonHeader>
        <IonToolbar color="secondary">
          <IonRow>
            <IonCol size="3">
          <IonTitle>{diahoy?.temperature}°</IonTitle>
            </IonCol>
            <IonCol size="6">
            <IonText>{diahoy?.weather.description}</IonText>
            </IonCol>
            <IonCol size="3">
          <img src={require('../assest/image/'+dh +'.png')}width="40" 
          height="40" id="fotohead"></img>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
     
  
    </>
  );
};

export default EncabezadoDiaHoy
