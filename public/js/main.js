var myBtn = document.getElementsByClassName("meme-img")[0];

myBtn.addEventListener('click', () => {
    console.log("Hello World!");
});




function uplaodImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var uploadedImg = document.getElementById("uploadedImg");

        reader.onload = function (e) {
            uploadedImg.setAttribute('src', e.target.result);
            // $('#inputfile').css('display', 'none');
            // $('#inputFileLabel').css('display', 'none');
            // $('#imageUplaodBtn').css('display', 'block');
        };

        reader.readAsDataURL(input.files[0]);
    }
}
