import React, { useState,useEffect } from 'react';
import { IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol,IonProgressBar } from '@ionic/react';

import './Extendido.css';
import { useGetSituacion } from '../hooks/Consultas';




const Rio: React.FC = () => {
  const data1=useGetSituacion();
 console.log(data1?.data.situacion);
 let estado=parseInt(data1?.data.estado_compuertas_porciento+"")/100
 let color="";
 console.log(estado)
 

  return (
    
    < >
     
      <IonCol size="12">
      <IonCard  >
        <IonCardHeader> 
        <IonCardTitle>Altura Rio</IonCardTitle>
         <IonCardSubtitle>{data1?.data.altura_fecha}</IonCardSubtitle>
         
          </IonCardHeader> 
        <IonCardContent>Compuertas abiertas al {data1?.data.estado_compuertas_porciento}</IonCardContent>
      </IonCard> 
      </IonCol>
     
        
    </>
  );
};

export default Rio
