/* eslint-disable no-restricted-globals */
import React, {useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {home, body,call} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {Botonatras}from './components/useBotonatras'
/* Theme variables */
import './theme/variables.css';
import { Plugins, Capacitor, PushNotificationToken} from '@capacitor/core';

const {PushNotifications}=Plugins;


const App: React.FC = () => {
  
  
  useEffect(() => {
    
   
    if (Capacitor.isNative) {
      PushNotifications.register();
      PushNotifications.addListener('registration',
        (token: PushNotificationToken) => {
          //alert('Push registration success, token: ' + token.value);
          console.log(token.value);
        }
      );
      PushNotifications.addListener('registrationError',
        (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );
      Plugins.App.addListener("backButton", (e) => {
        if (window.location.pathname === "/") {
          // Show A Confirm Box For User to exit app or not
          let ans = true//window.confirm("Are you sure");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/tab1") {
           // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } 
      });
    }
  }, []);
return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab4" component={Tab4} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon color="dark" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon color="dark" icon={body} />
            <IonLabel>Nosotros</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon color="dark" icon={call} />
            <IonLabel>Contactos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}
export default App;
