import React from 'react';
import { IonButton, IonButtons, IonContent, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {CallNumber} from "@ionic-native/call-number"
import { call, home } from 'ionicons/icons';

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
            <img alt="" src={require('../assest/image/logofull.png') } width="40" height="40" />
          </IonThumbnail>
        </IonItem>
            </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonItem>
            <IonLabel >Atención al vecino</IonLabel>
                
            <IonButton  color="success" onClick={() => Call("2326470665")} disabled>
                <IonIcon icon={call}  />
            </IonButton>
            2326470665
        </IonItem>
        <IonItem>
            <IonLabel >Policia</IonLabel>
            <IonButton disabled color="success" onClick={() => Call("2326452113")}>
                <IonIcon icon={call}  />
                </IonButton>
                2326452113
        </IonItem>
        <IonItem>
            <IonLabel >Bomberos</IonLabel>
           
           <IonButton disabled color="success" onClick={() => Call("100")}>
                <IonIcon icon={call}  />
            </IonButton>
            100
        </IonItem>
        <IonItem>
            <IonLabel >Hospital</IonLabel>
           
           <IonButton disabled color="success" onClick={() => Call("107")}>
                <IonIcon icon={call}  />
            </IonButton>
            107  
        </IonItem>
        <IonItem>
            <IonLabel >Desarrollo Social</IonLabel>
            
            <IonButton disabled color="success" onClick={() => Call("2326470661")}>
                <IonIcon icon={call}  />
            </IonButton>
            2326470661
        </IonItem>
        <IonItem>
            <IonLabel >CEOSP</IonLabel>
            
            <IonButton disabled color="success" onClick={() => Call("2326452525")}>
                <IonIcon icon={call}  />
        </IonButton>
            2326452525
        </IonItem>
        <IonItem>
            <IonLabel >Sanear</IonLabel>
            
            <IonButton disabled  color="success" onClick={() => Call("2326452391")}>
                <IonIcon icon={call}  />
            </IonButton>
            2326452391
        </IonItem>

        </IonContent>
    </IonPage>    
);
};
export default Tab3




