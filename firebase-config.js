/*
  PRIVATE COUPLE VAULT CONFIG

  LOCAL MODE works immediately and keeps uploaded images in this browser only.
  To synchronize private photos between Michael's phone and Donnah's phone,
  create a Firebase project and change mode to "firebase" below.

  IMPORTANT: The Firebase web config itself is not a secret. The real privacy
  protection comes from Firebase Authentication + Firestore/Storage Security
  Rules included with this project.
*/
window.COUPLE_CONFIG = {
  mode: "local",
  allowedEmails: [
    "MICHAEL_EMAIL_HERE",
    "DONNAH_EMAIL_HERE"
  ],
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
  }
};
