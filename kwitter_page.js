var firebaseConfig = {
    apiKey: "AIzaSyDGLdQwwYkTahhOyaE64yXQTXe4wXC2elA",
    authDomain: "kwitterproject-ea099.firebaseapp.com",
    databaseURL: "https://kwitterproject-ea099-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-ea099",
    storageBucket: "kwitterproject-ea099.appspot.com",
    messagingSenderId: "762326255485",
    appId: "1:762326255485:web:8da11ca4b11f146ff52e14"
  };
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html"; }

    function send()
     {
          msg = documnet.getElementById("msg").value; 
          firebase.database().ref(room_name).push({
          name:user_name,
         message:msg,
         like:0
          });
document.getElementById("msg").value="";
        }
        