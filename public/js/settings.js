

var signOutBtn = document.getElementById("signOutBtn");

signOutBtn.addEventListener('click', () => {
   
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        location.href = "index.html";
      }).catch(function(error) {
        // An error happened.
        alert(error);
      });

    
    
});