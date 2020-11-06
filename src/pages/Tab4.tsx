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
      {/* <img src={require('../assest/image/logofull.png')} className="logoareco" 
        width="150px" height="150px"/> */}
        <p>Esta aplicación es un desarrollo del Municipio de San Antonio de Areco y forma parte 
          de su Sistema Municipal de Gestión de Riesgos (SMGR) para alertar de manera temprana 
          sobre las crecidas del Río Areco y de los fenómenos meteorológicos que puedan afectar a la ciudad.</p>
        <p>El SMGR y la aplicación "SAT Areco" son acciones de Adaptación al Cambio Climático
           definidas en el Plan Local de Acción Climática de San Antonio de Areco 2020-2030.</p>
          <img src={require('../assest/image/banner.png')}  width="390" height="240" className="logobanner" />
      </IonContent>
 
    </IonPage>
  );
};

export default Tab4;