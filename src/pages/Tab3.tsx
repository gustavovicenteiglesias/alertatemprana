import React from 'react';
import { IonButton, IonButtons, IonContent, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { CallNumber } from "@ionic-native/call-number"
import { call, home } from 'ionicons/icons';

const Tab3: React.FC = () => {

    function Call(numero: string) {
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
                            <img alt="" src={require('../assest/image/logofull.png')} width="40" height="40" />
                        </IonThumbnail>
                    </IonItem>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem>
                    <IonLabel >Atención al vecino</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">2326470665</IonLabel>
                    {/*<IonButton color="success" onClick={() => Call("2326470665")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                    {/*</IonButton>*/}
                </IonItem>
                <IonItem>
                    <IonLabel >Policia</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">2326452113</IonLabel>
                    {/*<IonButton color="success" slot='end' onClick={() => Call("2326452113")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                        
                  {  /*</IonButton>*/}
                    
                </IonItem>
                <IonItem>
                    <IonLabel >Bomberos</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">100</IonLabel>
                    {/*<IonButton color="success" onClick={() => Call("100")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                    {/*</IonButton>*/}
                </IonItem>
                <IonItem>
                    <IonLabel >Hospital</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">107</IonLabel>
                    {/*<IonButton color="success" onClick={() => Call("107")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                    {/*</IonButton>*/}
                </IonItem>
                <IonItem>
                    <IonLabel >Desarrollo Social</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">2326470661</IonLabel>
                    {/*<IonButton color="success" onClick={() => Call("2326470661")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                    {/*</IonButton>*/}
                </IonItem>
                <IonItem>
                    <IonLabel >CEOSP</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">2326452525</IonLabel>
                    {/*<IonButton color="success" onClick={() => Call("2326452525")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                   {/* </IonButton>*/}
                </IonItem>
                <IonItem>
                    <IonLabel >Sanear</IonLabel>
                    <IonLabel slot='end' className="ion-text-end">2326452391</IonLabel>
                   {/* <IonButton color="success" onClick={() => Call("2326452391")}>*/}
                        <IonIcon icon={call} slot='end' color='success'/>
                   {/* </IonButton>*/}
                </IonItem>

            </IonContent>
        </IonPage>
    );
};
export default Tab3




