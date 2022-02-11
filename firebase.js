import firebase from 'firebase'
import config from './config'

const key = config.api.FIREBASE

const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: "munchies-7df57.firebaseapp.com",
  projectId: "munchies-7df57",
  storageBucket: "munchies-7df57.appspot.com",
  messagingSenderId: "477965630525",
  appId: "1:477965630525:web:8bf563a1d09c55df16fe54"
}

!firebase.apps.length ? firebase.initializeApp( firebaseConfig ) : firebase.app()

export default firebase