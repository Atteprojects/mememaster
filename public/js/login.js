


var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener('click', () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    console.log(email);
    console.log(password);
    location.href = "my-memes.html";
    
});

signInBtn.addEventListener('click', (e) => {
    e.preventDefault;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log(email);
        console.log(password);
        location.href = "my-memes.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        
        // ...
      });
    
    
});