
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBeZyaRDUXuLNjL7WmOdh70TyKWrXvnQS0",
  authDomain: "react-ecommerce-f99f4.firebaseapp.com",
  projectId: "react-ecommerce-f99f4",
  storageBucket: "react-ecommerce-f99f4.appspot.com",
  messagingSenderId: "820054019735",
  appId: "1:820054019735:web:ec087146d3cd17ecf123d2"
};
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)

export default app;