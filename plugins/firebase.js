import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    // TODO FirebaseのAPIを貼り付ける
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}
