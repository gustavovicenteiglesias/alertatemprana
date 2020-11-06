import React, { useState,useEffect } from 'react';
import { IonCard, IonItem, IonLabel,  IonText, } from '@ionic/react';
import '../pages/Tab1.css'
import { useGetRegistros } from '../hooks/Consultas';
const RegistroLLuvias: React.FC = () => {
    const data=useGetRegistros();
   
    return (
    
        
           <div >
          <IonCard >
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias de hoy:</IonLabel> 
                    </IonItem>
                  <IonText color="light" slot="end">{data?.data.lluvia_hoy}mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias de ayer:</IonLabel> 
                    </IonItem>
            <IonText color="light" slot="end">{data?.data.lluvia_ayer}mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias del mes:</IonLabel> 
                    </IonItem>
                <IonText color="light" slot="end">{data?.data.lluvia_mes}mm</IonText>
              </IonItem>
              <IonItem>
                  <IonItem>
                     <IonLabel color="light" >Lluvias del año:</IonLabel> 
                    </IonItem>
                <IonText color="light" slot="end">{data?.data.lluvia_ano}mm</IonText>
              </IonItem>
          </IonCard>
          </div>
       
      );

}
export default RegistroLLuvias