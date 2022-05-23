//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAN3-CyySvb5AgxSA7gf-3eCTnnV7O-Wq4",
      authDomain: "ajitter-database.firebaseapp.com",
      databaseURL: "https://ajitter-database-default-rtdb.firebaseio.com",
      projectId: "ajitter-database",
      storageBucket: "ajitter-database.appspot.com",
      messagingSenderId: "432424000562",
      appId: "1:432424000562:web:a529e1fd008eef366e702b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding_room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id= " + Room_names + " onclick= 'redriectedtoroomname(this.id)' >#"+Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML +=row;
                  //End code
            });
      });
      
}
getData();


function redriectedtoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}