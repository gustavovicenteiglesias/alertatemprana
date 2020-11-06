/* eslint-disable no-restricted-globals */
import React ,{useEffect}from 'react';
import { useIonRouter } from '@ionic/react';
import { Plugins, Capacitor } from '@capacitor/core';
import { setupConfig } from '@ionic/react'

export const Botonatras = () => {
  const { App } = Plugins;

  const ionRouter = useIonRouter();

   
    
    document.addEventListener('ionBackButton', (ev) => {
      
      ev.detail.register(-1, () => {
        console.log(ionRouter)
        if (!ionRouter.canGoBack()) {
          App.exitApp();
        }
      });
   });
    
 



}
