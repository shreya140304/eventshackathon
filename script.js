// Reference to the events list container
const eventsList = document.getElementById('events');

// Function to fetch events from Firebase
function fetchEvents() {
  // Reference to the 'events' node in your Firebase database
  const eventsRef = database.ref('events');

  // Fetching events
  eventsRef.on('value', (snapshot) => {
    // Clear previous content
    eventsList.innerHTML = '';

    // Loop through each event
    snapshot.forEach((childSnapshot) => {
      const eventData = childSnapshot.val();
      const eventId = childSnapshot.key;

      // Create event element
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');

      // Populate event details
      eventName.innerHTML = `
        <h2>${eventType.title}</h2>
        <p>Date: ${eventDate.date}</p>
        <p>Location: ${eventTime.location}</p>
        <p>Location: ${eventVenue.location}</p>
        <p>Location: ${eventCategory.location}</p>
        <p>Location: ${eventDescription.location}</p>
        <button onclick="rsvp('${eventId}')">RSVP</button>
      `;

      // Append event element to the list
      eventsList.appendChild(eventElement);
    });
  });
}

// Function to handle RSVP
function rsvp(eventId) {
  // Implement RSVP functionality here
}

// Fetch events when the page loads
fetchEvents();

    
    const firebaseConfig = {
        apiKey: "AIzaSyCUX1vsNu-2Yp_BN35qNkEsfYDYWSLVzC4",
        authDomain: "sol-51bec.firebaseapp.com",
        projectId: "sol-51bec",
        storageBucket: "sol-51bec.appspot.com",
        messagingSenderId: "870973511731",
        appId: "1:870973511731:web:1e9ff1541b46c9d58e2b46",
        measurementId: "G-9D5HCQ7L2L"
      };
      firebase.initializeApp(firebaseConfig);
      const firestore = firebase.firestore();
      const eventsRef = firestore.collection('events');