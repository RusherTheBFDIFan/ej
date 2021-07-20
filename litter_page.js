var firebaseConfig = {
      apiKey: "AIzaSyBeqKbuYavA4ejl--3QCjAU-EW4UIiKb8U",
      authDomain: "trashy-d5806.firebaseapp.com",
      databaseURL: "https://trashy-d5806-default-rtdb.firebaseio.com",
      projectId: "trashy-d5806",
      storageBucket: "trashy-d5806.appspot.com",
      messagingSenderId: "523392228228",
      appId: "1:523392228228:web:8a8ffa6706ec93366fdbd1"
    };
    firebase.initializeApp(firebaseConfig);
    
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = 
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
