import React, { useState,useEffect } from 'react';
import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,IonContent,IonDatetime,IonFooter,IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage,  IonRow, IonText,
  IonThumbnail,
            IonTitle, IonToolbar } from '@ionic/react';

import './Extendido.css';
import {closeOutline, add}from 'ionicons/icons';
import { useGetDia, useGetForescast,useGetAM } from '../hooks/Consultas';
import { Plugins } from '@capacitor/core';



const EncabezadoDiaHoy: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const diasemana="Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado"
  const mes="Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
    const diahoy= useGetDia()
    const AM = useGetAM()
    let alerta= false
    let dh=null;
    if (typeof(diahoy?.weather.id) === 'undefined') {
     dh="20";
    }else{
      dh=diahoy?.weather.id
    }
    if (AM?.data.estado === 1) {
      alerta=false
      
    } else {
      alerta=true
    }
    const { Share } = Plugins;
    const compartir=async ()=>{
      const  shareRet = await Share.share({
        title: AM?.data.titulo,
        text: AM?.data.situacion,
        url:'http://www.areco.gob.ar/',
        dialogTitle: 'Compartir'
      });
  
  }
  console.log(AM?.data.hora)
  return (
    
    < >
      
        <IonToolbar >
          <IonText >
            <h6 className="dias">
          <IonDatetime
            display-timezone="utc" 
            day-names={diasemana}
            monthNames={mes}
            displayFormat="DDDD DD MMMM YYYY "
            readonly={true} 
            value={diahoy?.date}
          />
          </h6>
          </IonText>      
                  
            
        <IonItem>
          <IonThumbnail slot="start">
            <img alt="" src={require('../assest/image/'+dh +'.png')} />
          </IonThumbnail>
            <IonLabel>
              <IonText color="light">
              <h1>{diahoy?.temperature}°</h1>
              </IonText>
            </IonLabel>
            
            <img alt='' src={require('../assest/image/alertas/admeteo.png') } width="30" height="30" 
            hidden={alerta} onClick={() => setShowModal(true)}
            />
          
            <IonThumbnail slot="end">
            <img alt='' src={require('../assest/image/logofull.png') } width="40" height="60" />
          </IonThumbnail>
        </IonItem>
        <IonModal isOpen={showModal} cssClass='modal-class' onDidDismiss={() => setShowModal(false)} >
        <IonHeader translucent>
            <IonToolbar>
             
                <h4 className="color-text">
                {AM?.data.titulo}
                </h4>
                <p  >
              <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="DDDD DD MMMM YYYY "
                readonly={true} 
                value={AM?.data.fecha}
                className="color-text"
                />
                <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="HH mm "
                readonly={true} 
                value={AM?.data.hora}
                className="color-text"
                />
                </p>
                <IonButtons slot="end">
                  <IonButton  onClick={() => setShowModal(false)}>
                    X
                  </IonButton>
                </IonButtons>
                
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="color-fondo">
            <p>{AM?.data.situacion}</p>
            

          </IonContent>
          <IonButtons slot="secondary" >
          <IonFooter className="modal-footer" >
            <IonButton class="modal-button" expand="full" onClick={compartir} >Compartir</IonButton>
          </IonFooter>
          </IonButtons>
        
       
        
      </IonModal>
        </IonToolbar>
     
     
     
    </>
  );
};

export default EncabezadoDiaHoy
