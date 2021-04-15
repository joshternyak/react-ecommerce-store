import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAuWckCokzJ99s4ETq-Eeqwcl6YAkGkVgo",
  authDomain: "react-ecommerce-course-3cd1f.firebaseapp.com",
  projectId: "react-ecommerce-course-3cd1f",
  storageBucket: "react-ecommerce-course-3cd1f.appspot.com",
  messagingSenderId: "624749284870",
  appId: "1:624749284870:web:67b0a2bf5ecaa5e8d73d87",
  measurementId: "G-HFWX0Q5M32",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
