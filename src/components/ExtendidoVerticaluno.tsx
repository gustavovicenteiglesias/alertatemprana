import React from 'react';
import {IonCol,  IonDatetime, IonGrid,  IonIcon, IonLabel, IonRow,IonThumbnail } from '@ionic/react';

import './Extendido.css';
import { water } from 'ionicons/icons';
import {  useGetForescast } from '../hooks/Consultas';
import tmax from "../assest/image/tmax.png";
import tmin from "../assest/image/tmin.png";


const Extendido: React.FC = () => {
  
 
  const data= useGetForescast()
  
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
              displayFormat="DDDD"
              disabled={true}
              className="texto-dia"
              >
              </IonDatetime>
              <div className="texto" style={{ marginTop:"10px"}}>
             <span>
              <img alt="" src={tmin} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[4].temp_min}° </h5> 
               </span>
              </div> 
              <div className="texto">
             <span>
              <img alt="" src={tmax} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[4].temp_max}° </h5> 
               </span>
              </div> 
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto" >
              <img alt="" src={require('../assest/image/'+data[4]?.morning.weather.id+'.png')} width="auto" height="40"  />
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
              <img alt="" src={require('../assest/image/'+data[4]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
              </IonThumbnail>
              <IonRow   className="lluvia" hidden={false}>
              <IonIcon icon={water}  size="small" />
              
                    <div className="texto">
                    {data[4]?.afternoon.rain_prob_range[0]}-{data[4]?.afternoon.rain_prob_range[1]}%
                    </div>
              
                </IonRow>
               
            </IonCol>
              {/*dia5*/}
           <IonCol className="extendidoVertical" >
             
              <IonDatetime value={data[5]?.date} 
              display-timezone="utc" 
              day-names={diasemana}
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"
              >
              </IonDatetime>
              <div className="texto" style={{ marginTop:"10px"}}>
             <span>
              <img alt="" src={tmin} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[5].temp_min}° </h5> 
               </span>
              </div> 
              <div className="texto">
             <span>
              <img alt="" src={tmax} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[5].temp_max}° </h5> 
               </span>
              </div> 
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt="" src={require('../assest/image/'+data[5]?.morning.weather.id+'.png')}
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
              <img alt="" src={require('../assest/image/'+data[5]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
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
              displayFormat="DDDD" 
              disabled={true}
              className="texto-dia"
              >
              </IonDatetime>
              <div className="texto" style={{ marginTop:"10px"}}>
             <span>
              <img alt="" src={tmin} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[6].temp_min}° </h5> 
               </span>
              </div> 
              <div className="texto">
             <span>
              <img alt="" src={tmax} style={{ width:"20px",marginRight:"10px"}}  />
              </span>
              <span>
               <h5 style={{display:"inline"}}> {data[6].temp_max}° </h5> 
               </span>
              </div> 
              <hr  style={{
                  color: '#rgba(82, 82, 81, 0.30)',
                  backgroundColor: 'rgba(82, 82, 81, 0.30)',
                  height: .5,
                  borderColor : 'rgba(82, 82, 81, 0.30)',
                 
              }}/>
              <div  >
              <IonThumbnail  className="foto">
              <img alt="" src={require('../assest/image/'+data[6]?.morning.weather.id+'.png')} 
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
              <img alt="" src={require('../assest/image/'+data[6]?.afternoon.weather.id+'.png')} width="auto" height="40"  />
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
               <h5>Fuente:</h5>
              </div>  
              <div className="texto">
               <h5>SMN</h5>
              </div>
             
            </IonCol>
            
        </IonRow>
        </IonGrid>
        
          
    </>
  );
};

export default Extendido
