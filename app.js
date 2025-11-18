import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// -----------------------------
// TUS CREDENCIALES DE FIREBASE
// -----------------------------
const firebaseConfig = {
  apiKey: "AIzaSyA8BnDbgjLgJmSW6Vdua8oeMNFsEoULtDs",
  authDomain: "monitoreo-de-presion-13749.firebaseapp.com",
  databaseURL: "https://monitoreo-de-presion-13749-default-rtdb.firebaseio.com/",
  projectId: "monitoreo-de-presion-13749",
  storageBucket: "monitoreo-de-presion-13749.appspot.com",
  messagingSenderId: "601505876595",
  appId: "1:601505876595:web:ea277c81ad6be1e1b93806"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Referencia a la ruta del nodo
const sensorRef = ref(db, "sensorPresion");

// Valores HTML
const kpaHTML = document.getElementById("kpa");
const voltHTML = document.getElementById("voltaje");
const fechaHTML = document.getElementById("fechaHora");
const updateHTML = document.getElementById("updateTime");

// Escuchar cambios en tiempo real
onValue(sensorRef, (snapshot) => {
  const data = snapshot.val();
  if (!data) return;

  kpaHTML.innerText = data.kPa.toFixed(4);
  voltHTML.innerText = data.voltaje.toFixed(5);
  fechaHTML.innerText = data.fechaHora;

  const now = new Date().toLocaleString("es-MX");
  updateHTML.innerText = now;
});
