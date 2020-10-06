import React, { useState,useEffect } from 'react';
import { IonCard, IonCol,IonContent,IonHeader, IonItem, IonLabel, IonPage,  IonRow, IonText,
    IonThumbnail,
              IonTitle, IonToolbar } from '@ionic/react';
import '../pages/Tab1.css'

const RegistroLLuvias: React.FC = () => {


    return (
    
        
           <div className="content">
          <IonCard >
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias de hoy:</IonLabel> 
                    </IonItem>
                  <IonText color="light" slot="end">0.0mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias de ayer:</IonLabel> 
                    </IonItem>
                  <IonText color="light" slot="end">0.0mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias del mes:</IonLabel> 
                    </IonItem>
                  <IonText color="light" slot="end">0.0mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias del año:</IonLabel> 
                    </IonItem>
                  <IonText color="light" slot="end">0.0mm</IonText>
              </IonItem>
          </IonCard>
          </div>
       
      );

}
export default RegistroLLuvias