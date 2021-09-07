import React, { useState } from 'react';
import { IonButton, IonButtons,IonContent,IonDatetime,IonFooter,IonHeader, IonItem, IonLabel, IonModal, IonText,IonThumbnail, IonToolbar } from '@ionic/react';

import './Extendido.css';
import satblanco from '../assest/satblanco.png';
import { useGetDia, useGetCP,useGetAM } from '../hooks/Consultas';
import { Plugins } from '@capacitor/core';




const EncabezadoDiaHoy: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCorto, setShowModalCorto] = useState(false);
  const diasemana="Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado"
  const mes="Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
  
  const diahoy= useGetDia()
    const AM = useGetAM()
    const CP=useGetCP();
    if (typeof(CP)  === 'undefined') return null;
    let hoy=new Date();
    let alerta= false;
    let cortoplazo=false;
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

  //corto plazo
  const compartirCorto=async ()=>{
    const  shareRet = await Share.share({
      title: CP.data.titulo,
      text: CP.data.contenido,
      url:'http://www.areco.gob.ar/',
      dialogTitle: 'Compartir'
    });
}
  let anio=CP?.data.fecha.slice(0,4);
  let mes1=CP?.data.fecha.slice(5,7);
  let dia=CP?.data.fecha.slice(8,10);
  let hh=CP?.data.hora.slice(0,2);
  let mm=CP?.data.hora.slice(3,5);
  if ( typeof(anio)  !== 'undefined'&& typeof(mes1)  !== 'undefined'&& typeof(dia)  !== 'undefined'){
      console.log(parseInt(dia))
      let anioac=hoy.getFullYear();
      let mmactual=hoy.getMonth()+1;
      let diahoy=hoy.getDate();
      if (diahoy===parseInt(dia)&&mmactual===parseInt(mes1)&&anioac===parseInt(anio) ){
          let hhActual=hoy.getHours();
          let mmActual=hoy.getMinutes();
          let totalmMinActuales=(hhActual*60)+mmActual;
        
            if(typeof(hh) !== 'undefined'&& typeof(mm) !== 'undefined' ){
                let totalMinutos=((parseInt(hh)*60)+parseInt(mm))+180;
               
                if(totalmMinActuales<=totalMinutos)
                  {
                  cortoplazo=false;
                  }else {cortoplazo=true;};
              }
          }else {cortoplazo=true;}
      
      
        }
      
 ///////fin corto plazo//////////
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
            <img alt='' src={require('../assest/image/alertas/atencion.png') } width="30" height="30" 
            hidden={cortoplazo} onClick={() => setShowModalCorto(true)}
            />
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
            <div className="row-header-corto">
                <span><img alt="Sat" src={satblanco} width="80px" height="80px"/></span>
                <span><h4 style={{display:"inline", color:"white"}}>
                {AM?.data.titulo}
                </h4>
                </span>
               
                </div>
             
               {/* <h4 className="color-text">
                {AM?.data.titulo}
                </h4>*/}
                <p  style={{textAlign:"center"}}>
              <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="DDDD DD MMMM YYYY "
                readonly={true} 
                value={AM?.data.fecha}
            
                />
                <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="HH mm "
                readonly={true} 
                value={AM?.data.hora}
           
                />
                </p>
                {/*<IonButtons slot="end">
                  <IonButton  onClick={() => setShowModal(false)}>
                    X
                  </IonButton>
              </IonButtons>*/}
                
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
      
      <IonModal isOpen={showModalCorto} cssClass='modal-class' onDidDismiss={() => setShowModalCorto(false)} >
                
        <IonHeader>
            <IonToolbar className="ionTolbar-corto">
               <div className="row-header-corto">
                <span><img alt="Sat" src={satblanco} width="80px" height="80px"/></span>
                <span><h4 style={{display:"inline", color:"white"}}>
                Aviso a Corto Plazo
                </h4>
                </span>
               
                </div>
                <p  >

              <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="DDDD DD MMMM YYYY "
                readonly={true} 
                value={CP?.data.fecha}
                className="color-text"
                />
                <IonDatetime
                display-timezone="utc" 
                day-names={diasemana}
                monthNames={mes}
                displayFormat="HH:mm "
                readonly={true} 
                value={CP?.data.hora}
                className="color-text"
                />
                </p>
                
                
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="color-fondo-corto">
            <p style={{justifyContent:"center",display:"flex"}}>{CP?.data.contenido}</p>
            <div style={{justifyContent:"center",display:"flex"}}>
            <img alt='Tipo de Alerta' src={require('../assest/image/'+CP?.data.imagen) } width="60" height="60" />
            </div>
          </IonContent>
          <IonButtons slot="secondary" >
          <IonFooter className="modal-footer-corto" >
            <IonButton class="modal-button-corto" expand="full" onClick={compartirCorto} >Compartir</IonButton>
          </IonFooter>
          </IonButtons>
        
       
        
      </IonModal>
        </IonToolbar>
     
     
     
    </>
  );
};

export default EncabezadoDiaHoy
