import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
        <IonItem>
           <IonLabel>
              <IonText color="light">
              <IonTitle>Nosotros</IonTitle> 
              </IonText>
            </IonLabel>
            <IonThumbnail slot="end">
            <img src={require('../assest/image/logofull.png') } width="40" height="40" />
          </IonThumbnail>
        </IonItem> 
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <img src={require('../assest/image/logofull.png')} className="logoareco" 
        width="150px" height="150px"/>
        <p>Esta aplicación es un desarrollo del Municipio de San Antonio de Areco
           y forma parte de su Plan Municipal de Gestión de Riesgo para alertar de
            manera temprana sobre las crecidas del rio Areco y de fenómenos meteorológicos
             que puedan afectar a la ciudad.</p>
        <p>El sistema de Alerta temprana obtuvo el premio latinoamericano al Buen Gobierno 
          Municipal Otorgado por la Federación Latinoamericana de ciudades en 2017.</p>
          <img src={require('../assest/image/banner.png')}  width="390" height="240" className="logobanner" />
      </IonContent>
      
    </IonPage>
  );
};

export default Tab4;