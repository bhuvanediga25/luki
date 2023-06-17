let ok =3;
console.log("ik")



const firebaseConfig = {
  apiKey: "AIzaSyANu0jJ2LN5Sg7njNqnamLQ0SKt6R9s7wk",
  authDomain: "trail1-91967.firebaseapp.com",
  databaseURL: "https://trail1-91967-default-rtdb.firebaseio.com",
  projectId: "trail1-91967",
  storageBucket: "trail1-91967.appspot.com",
  messagingSenderId: "1072773254878",
  appId: "1:1072773254878:web:1541971bcfc151a19ffc4f",
  measurementId: "G-T718B0NWTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  

  
  function get() {
    var username = 11;
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      //alert(data.email)
      document.getElementById("count").innerHTML = data.email;
      document.getElementById("count2").innerHTML = data.password;
      document.getElementById("count3").innerHTML = data.username;
      document.getElementById("count4").innerHTML = data.say_something;
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
 
 get();

 document.getElementById("Blood").onclick = function(){
  window.location.href="a.html"
 }