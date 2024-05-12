import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3n9wR1rbGGI0htWR9rnH5u-_ye8DYs0U",
    authDomain: "sj-fintech.firebaseapp.com",
    projectId: "sj-fintech",
    storageBucket: "sj-fintech.appspot.com",
    messagingSenderId: "139128222866",
    appId: "1:139128222866:web:f3ad20736bb4db0a7c224b"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);



document.getElementById('submit').addEventListener('click', function(e) {
    set(ref(db, 'user/' + document.getElementById('fullName').value), {

        FullName: document.getElementById('fullName').value,
        PhoneNumber: document.getElementById('phone_number').value,
        EmailID: document.getElementById('email_id').value,
        DateOfBirth: document.getElementById('date_of_birth').value,
        AadharNumber: document.getElementById('aadhar_number').value,
        PanNumber: document.getElementById('pan_number').value,
        Gender: document.getElementById('gender').value,
        MaritalStatus: document.getElementById('marital_status').value,
        PermanentAddress: document.getElementById('permanent_address').value,
        City: document.getElementById('city').value,
        State: document.getElementById('state').value,
        Pincode: document.getElementById('pincode').value,
        ResidentialAddress: document.getElementById('residential_address').value,
        ResidentialCity: document.getElementById('residential_city').value,
        ResidentialState: document.getElementById('residential_state').value,
        ResidentialPincode: document.getElementById('residential_pincode').value,
        PanNumber: document.getElementById('pan_number').value
    });
})