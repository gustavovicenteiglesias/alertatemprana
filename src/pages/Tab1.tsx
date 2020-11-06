import React from 'react';
import {  IonContent, IonPage } from '@ionic/react';

import './Tab1.css';

import Extendido from '../components/SlideExtendido';
import EncabezadoDiaHoy from '../components/EncabezadoDiaHoy'
import Rio from '../components/Rio';

import RegistroLLuvias from '../components/RegistroLluvias';

const Tab1: React.FC = () => {
 
  
  
  return (
    
    <IonPage>
    <IonContent >
    <EncabezadoDiaHoy></EncabezadoDiaHoy>
    <Rio></Rio>
    <Extendido></Extendido>
    <RegistroLLuvias></RegistroLLuvias>
    
    </IonContent>
    </IonPage>
    
  );
};

export default Tab1
