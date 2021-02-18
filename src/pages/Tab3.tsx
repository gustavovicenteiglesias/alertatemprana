import React from 'react';
import {  IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import './Tab3.css';
import {CallNumber} from "@ionic-native/call-number"
import { call } from 'ionicons/icons';
const Icono=()=>{

    return (
        <IonIcon icon={call} color="success" ariaLabel="Telefono" style={{ marginRight:"10px"}}/>
    )
}



const Tab3: React.FC = () => {

function Call(numero: string) 
{
     CallNumber.callNumber(numero, true);
   
    
}

return (
    <IonPage>
       <IonHeader>
            <IonToolbar>
            <IonItem>
           <IonLabel>
              <IonText color="light">
              <IonTitle>Teléfonos útiles</IonTitle> 
              </IonText>
            </IonLabel>
            <IonThumbnail slot="end">
            <img alt="Logo San Antonio de Areco" src={require('../assest/image/logofull.png') } width="40" height="40" />
          </IonThumbnail>
        </IonItem>
            </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonItem>
            <IonLabel >Atención al vecino</IonLabel>
                
            {/*<IonButton  color="success" onClick={() => Call("2326470665")} disabled>*/}
            <Icono/>
            {/*</IonButton>*/}
            2326470665
        </IonItem>
        <IonItem>
            <IonLabel >Policia</IonLabel>
            <Icono/>
                2326452113
        </IonItem>
        <IonItem >
            <IonLabel >Bomberos</IonLabel>
            <Icono />
            <span style={{marginRight:"60px"}}>100</span>
        </IonItem>
        <IonItem >
            <IonLabel >Hospital</IonLabel>
            <Icono/>
            <span style={{marginRight:"60px"}}>107</span> 
        </IonItem>
        <IonItem>
            <IonLabel >Desarrollo Social</IonLabel>
            <Icono/>
            2326470661
        </IonItem>
        <IonItem>
            <IonLabel >CEOSP</IonLabel>
            <Icono/>
            2326452525
        </IonItem>
        <IonItem>
            <IonLabel >Sanear</IonLabel>
            <Icono/>
            2326452391
        </IonItem>

        </IonContent>
    </IonPage>    
);
};
export default Tab3




