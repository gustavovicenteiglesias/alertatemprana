import React, { useState,useEffect } from 'react';
import { IonAlert, IonAvatar, IonButton, IonCard, 
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
  IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonItemGroup, IonLabel, IonList, 
  IonListHeader, IonPage, IonProgressBar, IonRouterLink, IonRow, IonText,
   IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';

import './Extendido.css';
import { happy, water } from 'ionicons/icons';
import { useGetDia, useGetForescast } from '../hooks/Consultas';



const Extendido: React.FC = () => {
  
  const [showAlert1, setShowAlert1] = useState(true);
  const [pronostico, setPronostico] = useState();
  const data= useGetForescast()
  const diahoy= useGetDia()
  const diasemana="DOM,LUN,MAR,MIE,JUE,VIE,SAB"
  if (data.length === 0) return null;
 

 
  return (
    
    <>
      
      
        <IonGrid>
        <IonRow>
          {/*dia4*/}
            
           <IonCol className="extendidoVertical"  >
             
              <IonDatetime value={data[4]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" >
              </IonDatetime>
              <div className="texto">
                Tmin  {data[4].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[4].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto" >
              <img src={require('../assest/image/'+data[4]?.morning.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              </div>
              
              <IonRow   className="lluvia"  >
              <IonIcon icon={water}  size="small"hidden={false} />
              <IonLabel color="light"  >
                 <div className="texto">
                    {data[4]?.morning.rain_prob_range[0]}-{data[4]?.morning.rain_prob_range[1]}%
                    </div>
               </IonLabel>
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              
              <IonThumbnail className="foto">
              <img src={require('../assest/image/'+data[4]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              
                    <div className="texto">>
                    {data[4]?.afternoon.rain_prob_range[0]}-{data[4]?.afternoon.rain_prob_range[1]}%
                    </div>
              
                </IonRow>
               
            </IonCol>
              {/*dia5*/}
           <IonCol className="extendidoVertical" >
             
              <IonDatetime value={data[5]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" >
              </IonDatetime>
              <div className="texto">
                Tmin  {data[5].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[5].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img src={require('../assest/image/'+data[5]?.morning.weather.id+'.png')}
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              
              <div className="texto">
                    {data[5]?.morning.rain_prob_range[0]}-{data[5]?.morning.rain_prob_range[1]}%
                    </div>
              
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              </div>
              <IonThumbnail className="foto">
              <img src={require('../assest/image/'+data[5]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              
              <div className="texto">
                    {data[5]?.afternoon.rain_prob_range[0]}-{data[5]?.afternoon.rain_prob_range[1]}%
                    </div>
                
                </IonRow>
               
            </IonCol>
         {/*dia2*/}
         <IonCol className="extendidoVertical" >
             
              <IonDatetime value={data[6]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" >
              </IonDatetime>
              <div className="texto">
                Tmin  {data[6].temp_min}° 
              </div>  
              <div className="texto">
                Tmax  {data[6].temp_max}° 
              </div>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img src={require('../assest/image/'+data[6]?.morning.weather.id+'.png')} 
               width="auto" height="40" hidden={false}/>
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              
              <div className="texto">
                    {data[6]?.morning.rain_prob_range[0]}-{data[6]?.morning.rain_prob_range[1]}%
                    </div>
             
              </IonRow>
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              </div>
              <IonThumbnail className="foto">
              <img src={require('../assest/image/'+data[6]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
             
              <div className="texto">
                    {data[6]?.afternoon.rain_prob_range[0]}-{data[6]?.afternoon.rain_prob_range[1]}%
                    </div>
                
                </IonRow>
              
            </IonCol>
           
            {/*dia3*/}
          <IonCol className="extendidoVertical">
          <div className="texto">
               Fuente:
              </div>  
              <div className="texto">
               SMN
              </div>
             
            </IonCol>
            
        </IonRow>
        </IonGrid>
        
          
    </>
  );
};

export default Extendido
