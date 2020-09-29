import React, { useState,useEffect } from 'react';
import { IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol,IonProgressBar } from '@ionic/react';

import './Extendido.css';




const Rio: React.FC = () => {
  
 
  return (
    
    < >
     
      <IonCol size="12">
      <IonCard>
        <IonCardHeader> 
        <IonCardTitle>Altura Rio</IonCardTitle>
        <IonCardSubtitle>1.8</IonCardSubtitle>
          <IonProgressBar color="warning" value={0.5}></IonProgressBar><br />
          </IonCardHeader> 
          <IonCardContent>Compuertas abiertas al 30%</IonCardContent>
      </IonCard> 
      </IonCol>
     
        
    </>
  );
};

export default Rio
