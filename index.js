// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCypdG-rqzfGFYBuxDQUNk8qD73wCUG5dA",
    authDomain: "sjfsc-f72f7.firebaseapp.com",
    projectId: "sjfsc-f72f7",
    storageBucket: "sjfsc-f72f7.appspot.com",
    messagingSenderId: "807759975556",
    appId: "1:807759975556:web:675925b68bceb59e1c9ed1"
    };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

//Set up our registration function
function register() {
  //get all our input fields
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    fullName = document.getElementById("full_name").value;
    number = document.getElementById("phone_number").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
  //validate input fields
    if(validate_email(email) == false || validate_password(password) == false) {
      alert('email or password invalid')
      return 
    }
    if(validate_field(fullName) == false || validate_field(number) == false || validate_field(city) == false || validate_field(state) == false) {
      alert('one or more inputs is invalid')
      return
    }

    //move on with auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
  // Declare user variable
    let user = auth.currentUser

  //Add this user to firebase database
    let database_ref = database.ref();

  //create user data
    let user_data = {
    email: email,
    full_name: full_name,
    phone_number: phone_number,
    city: city,
    state: state,
    last_login: Date.now()
    }

    database_ref.child('Users/' + user.uid).set(user_data)

    alert('User created!!')
    })

    .catch(function(error){
  // firebase will use this to alert of its errors
    let error_code = error.code;
    let error_message = error.message;

    alert(error_message);
    })
  }

//validate input fields

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true) {
      // email is true
      return true;
    } else {
      // email is not good
      return false;
    }
}

function validate_password(password) {
  // firebase only accepts length > 6
  if(password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if(field == null) {
    return false;
  }
  if(field.length <= 0) {
    return false;
  } else {
    return true;
  }
}





