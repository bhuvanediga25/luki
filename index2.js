let ok = 3;
console.log("ok")
const firebaseConfig = {
  apiKey: "AIzaSyBcnDS4IjJj0zXtOdJfb_q2UKnV-Be5EuI",
  authDomain: "buddy-1c27e.firebaseapp.com",
  databaseURL: "https://buddy-1c27e-default-rtdb.firebaseio.com",
  projectId: "buddy-1c27e",
  storageBucket: "buddy-1c27e.appspot.com",
  messagingSenderId: "300802818127",
  appId: "1:300802818127:web:dad1e6da33711a89192a3a",
  measurementId: "G-1THKEKC603"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  document.getElementById("get").onclick = function(){
   
    var username = document.getElementById('username').value
    console.log("ok")
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()

   // alert(data.email)
    document.getElementById("count").innerHTML = data.email;
    console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
    //console.log(data.favourite_food);
  
    })
  }


  function get() {
    var Username = "NK"
    console.log("ok")
    var user_ref = database.ref('users/' + Username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      //document.getElementById("count").innerHTML = data.email;
      
      //alert(data.BloodAvailability)
      document.getElementById("p1").innerHTML = data.Age
      document.getElementById("p2").innerHTML = data.BloodAvailability
      //console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      //console.log(data.favourite_food);
  
    })
    alert(data.Age)
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
