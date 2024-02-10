import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase , ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUX1vsNu-2Yp_BN35qNkEsfYDYWSLVzC4",
  authDomain: "sol-51bec.firebaseapp.com",
  projectId: "sol-51bec",
  storageBucket: "sol-51bec.appspot.com",
  messagingSenderId: "870973511731",
  appId: "1:870973511731:web:1e9ff1541b46c9d58e2b46",
  measurementId: "G-9D5HCQ7L2L"
};


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.getDatabase(app);

function uploadLeaderboard() {
  const Event = document.getElementById('Event').value;
  const first = document.getElementById('first').value;
  const second = document.getElementById('second').value;
  const third = document.getElementById('third').value;

  db.ref('leaderboard').push({
    Event: Event,
    first: first,
    second: second,
    third: third,
});

document.getElementById('leaderboard-list').reset();


alert("Upload Succesfull!")
}


  
