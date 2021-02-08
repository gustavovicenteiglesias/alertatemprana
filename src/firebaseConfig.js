

import firebase from "firebase";
import 'firebase/firestore';

export const inicializarFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyD--yBkaeROxrnWZgjRUu1TIVjiin6VG24",
        authDomain: "satareco-a13b5.firebaseapp.com",
        projectId: "satareco-a13b5",
        storageBucket: "satareco-a13b5.appspot.com",
        messagingSenderId: "999678894601",
        appId: "1:999678894601:web:d333da8ccf654e2df88ed8",
        measurementId: "G-Z3GCGDTM58"
      };

    firebase.initializeApp(firebaseConfig);
};



export const preguntarPermisos = async () => {
    try {
        const messaging = firebase.messaging();

        //await messaging.requestPermission();
        await Notification.requestPermission().then(async permission => {
            if (permission === "denied") {
                console.log("Permission wasn't granted. Allow a retry.");
                return;
            } else if (permission === "default") {
                console.log("The permission request was dismissed.");
                return;
            }
            const token = await messaging.getToken();
            console.log("user token: ", token);

            return token;
        });
    } catch (error) {
        console.error(error);
    }
};