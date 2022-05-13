var firebaseConfig = {
    apiKey: "AIzaSyDGLdQwwYkTahhOyaE64yXQTXe4wXC2elA",
    authDomain: "kwitterproject-ea099.firebaseapp.com",
    databaseURL: "https://kwitterproject-ea099-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-ea099",
    storageBucket: "kwitterproject-ea099.appspot.com",
    messagingSenderId: "762326255485",
    appId: "1:762326255485:web:8da11ca4b11f146ff52e14"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + username + " !";


function addRoom() 
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem ("room_name" , room_name);
    window.location = "kwitter_page.html";
}

function getData(){
    firebase.database().ref("/").on('value' , function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKEy;
console.log("Room name - " + Room_names);
row = "<div class='room_name' id=" + Room_names+"onclik='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr></hr>";
document.getElementById("output").innerHTML +=row;
});}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
