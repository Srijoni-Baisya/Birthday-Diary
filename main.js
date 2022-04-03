//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDvsUUJdOKEbrLRwp0tbi6LaGjtrJG3boI",
    authDomain: "birthday-diary-d63cf.firebaseapp.com",  
    databaseURL: "https://birthday-diary-d63cf-default-rtdb.firebaseio.com",  
    projectId: "birthday-diary-d63cf",  
    storageBucket: "birthday-diary-d63cf.appspot.com",  
    messagingSenderId: "336218975090",  
    appId: "1:336218975090:web:d0fb2a8f4d72a628700beb"  
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function show_details(){
    
    person = document.getElementById("family").value;
    console.log(person);
    function getData() { firebase.database().ref("/" + person).on('value', function(snapshot) { document.getElementById("details").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();{
        firebase_message_id = childKey;
        message_data = childData;
    //Start code
     console.log(firebase_message_id);
     console.log(message_data);

     member= message_data['Name'];
     age= message_data['Current_age'];
     birthday= message_data['Birthday'];
     link = message_data['Photo'];
     food = message_data['Food'];

     name_tag = "<h3 class = 'info'> Name : "+member+" </h3>";
     age_tag = "<h3 class = 'info'> Current Age : "+age+" </h3>";
     birthday_tag = "<h3 class = 'info'> Birthday : "+birthday+" </h3>";
     food_tag = "<h3 class = 'info'> Favourite Food : "+food+" </h3>";
     img_tag = "<img class = 'img-responsive pic' src = ' " + link + "'>"
     document.getElementById("details").style.display = "inline-block";
     document.getElementById("details").innerHTML = name_tag + age_tag + birthday_tag + food_tag + img_tag;;

    //End code
     } });  }); }
    getData();
}

