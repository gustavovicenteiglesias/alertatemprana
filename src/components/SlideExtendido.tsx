
import React, { useState,useEffect } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import Extendidodos from './Extendidodos'
import Extendidotres from './extendidotres'
//import {slideOpts}from './SlideOption'
import ExtendidoVerticalUno from './ExtendidoVerticaluno';
import ExtendidoVertical from './ExtendidoVertical'
// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.


export const SlidesExample: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };
return(
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <ExtendidoVertical/>
      </IonSlide>
      <IonSlide>
        <ExtendidoVerticalUno/>
      </IonSlide>
    </IonSlides>
)
};
export default SlidesExample