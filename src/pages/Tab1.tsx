import React, { useState,useEffect } from 'react';
import { IonAlert, IonAvatar, IonButton, IonCard, 
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, 
  IonListHeader, IonPage, IonProgressBar, IonRouterLink, IonRow, IonText,
   IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import Extendido from '../components/Extendido';
import EncabezadoDiaHoy from '../components/EncabezadoDiaHoy'
import Rio from '../components/Rio';
import Dibujo from '../components/Dibujo';
import Barra from '../components/Barra.js';




const Tab1: React.FC = () => {
  
 
  return (
    
    <IonPage>
    <IonContent class="background">
    <EncabezadoDiaHoy></EncabezadoDiaHoy>
    <Rio></Rio>
    <Extendido></Extendido>
    </IonContent>
    </IonPage>
    
  );
};

export default Tab1
