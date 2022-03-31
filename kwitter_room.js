
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDH4nsMQu1KbCqZ9NvxxoqmMieoZXEYhzc",
      authDomain: "my-kwitter-app-c-93.firebaseapp.com",
      databaseURL: "https://my-kwitter-app-c-93-default-rtdb.firebaseio.com",
      projectId: "my-kwitter-app-c-93",
      storageBucket: "my-kwitter-app-c-93.appspot.com",
      messagingSenderId: "775070069829",
      appId: "1:775070069829:web:9e6c889e6e2485bf7d5f2c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : " adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
;}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}