

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

  function createEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventType = document.getElementById('eventType').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventVenue = document.getElementById('eventVenue').value;
    const eventCategory = document.getElementById('eventCategory').value;
    const eventDescription = document.getElementById('eventDescription').value;

    db.ref('events').push({
      eventName: eventName,
      eventType: eventType,
      eventDate: eventDate,
      eventTime: eventTime,
      eventVenue: eventVenue,
      eventCategory: eventCategory,
      eventDescription: eventDescription
  });

  document.getElementById('eventForm').reset();

  
  alert("Login Succesfull!!")
}


    
  
