import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,onAuthStateChanged } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBALxNnVyLoIa34USkJHWcs37S6GVJ3VfA",
  authDomain: "inventoryvuefirebase.firebaseapp.com",
  projectId: "inventoryvuefirebase",
  storageBucket: "inventoryvuefirebase.appspot.com",
  messagingSenderId: "31562894830",
  appId: "1:31562894830:web:c26b5315d02e2823b992ff",
  measurementId: "G-9J0PRYWN5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Ensure that app.config.globalProperties is defined before setting $currentUser
if (app.config.globalProperties) {
  onAuthStateChanged(auth, (user) => {
    app.config.globalProperties.$currentUser = user;
  });
}
// , storage
// Export Firestore and Auth
export { app, db, auth };

