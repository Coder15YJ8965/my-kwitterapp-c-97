
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
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    });
}