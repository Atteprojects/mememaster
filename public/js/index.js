
var user = false;

var myMemesBtn = document.getElementById("myMemesBtn");

myMemesBtn.addEventListener('click', () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user = true;
            location.href = "my-memes.html";
        }
        else {
            user = false;
            location.href = "login.html";
        }
    });
    
});

