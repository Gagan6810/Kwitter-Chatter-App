username = localStorage.getItem('username');
roomname = localStorage.getItem('room_name_clicked');

function send(){
      msg = document.getElementById('msg').value;
      firebase.database().ref(roomname).push({
            username : username,
            meassage : msg,
            likes : 0
      });
      document.getElementById('msg').value = '';
}

/*function getData() { 
      firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;

      } });  }); }
getData();*/

