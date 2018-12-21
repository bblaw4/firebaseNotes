import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAjbmw30OWlzcldYCyTV9VpnperNYp7-NM",
  authDomain: "notes-bcc5d.firebaseapp.com",
  databaseURL: "https://notes-bcc5d.firebaseio.com",
  projectId: "notes-bcc5d",
  storageBucket: "notes-bcc5d.appspot.com",
  messagingSenderId: "358950531560"
};
firebase.initializeApp(config);
export default firebase;
