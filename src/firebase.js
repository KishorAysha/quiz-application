import { initializeApp } from "firebase/app";

//firebase configuration
// const app = initializeApp({
// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID,
// });
//
const firebaseConfig = {
  apiKey: "AIzaSyDrn1UITrnc2oVvCeH79rGQo2OElgmHmcw",
  authDomain: "react-quiz-dev-8a325.firebaseapp.com",
  projectId: "react-quiz-dev-8a325",
  storageBucket: "react-quiz-dev-8a325.appspot.com",
  messagingSenderId: "1059023280212",
  appId: "1:1059023280212:web:64cda7b600b571e484f5c1",
};
const app = initializeApp(firebaseConfig);

export default app;
