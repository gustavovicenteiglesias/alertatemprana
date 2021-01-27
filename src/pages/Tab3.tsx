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
            <img src={require('../assest/image/logofull.png') } width="40" height="40" />
          </IonThumbnail>
        </IonItem>
            </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonItem>
            <IonLabel >Atención al vecino</IonLabel>
            <IonText>2326470665 {' '}  </IonText>
            {/*<IonButton  color="success" onClick={() => Call("2326470665")}>
                <IonIcon icon={call}  />
            </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >Policia</IonLabel>
            <IonText>2326452113 {' '}  </IonText>
            {/*<IonButton  color="success" onClick={() => Call("2326452113")}>
                <IonIcon icon={call}  />
                </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >Bomberos</IonLabel>
            <IonText>100 {' '}  </IonText>
           {/* <IonButton  color="success" onClick={() => Call("100")}>
                <IonIcon icon={call}  />
            </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >Hospital</IonLabel>
            <IonText>107 {' '}  </IonText>
           {/* <IonButton  color="success" onClick={() => Call("107")}>
                <IonIcon icon={call}  />
            </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >Desarrollo Social</IonLabel>
            <IonText>2326470661 {' '}  </IonText>
            {/*<IonButton  color="success" onClick={() => Call("2326470661")}>
                <IonIcon icon={call}  />
            </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >CEOSP</IonLabel>
            <IonText>2326452525 {' '}  </IonText>
            {/*<IonButton  color="success" onClick={() => Call("2326452525")}>
                <IonIcon icon={call}  />
        </IonButton>*/}
        </IonItem>
        <IonItem>
            <IonLabel >Sanear</IonLabel>
            <IonText>2326452525 {' '}  </IonText>
            {/*<IonButton  color="success" onClick={() => Call("2326452391")}>
                <IonIcon icon={call}  />
            </IonButton>*/}
        </IonItem>

        </IonContent>
    </IonPage>    
);
};
export default Tab3




