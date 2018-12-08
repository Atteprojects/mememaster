
var imgLoader = document.getElementById("imgLoader");
var canvas = document.getElementById("imgCanvas");
var ctx = canvas.getContext('2d');
var img = new Image();
var text_title = "Enter Text";



imgLoader.addEventListener('change', handleImage, false);

window.addEventListener('load', DrawPlaceholder);

function DrawPlaceholder() {
    img.onload = function() {
        DrawOverlay(img);
        DynamicText(img);
    };
    img.src = 'images/meme2.jpg';
}

function DrawOverlay(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var factor  = img.width / canvas.width;
    imgHeight = img.height / factor;
    canvas.height = imgHeight;
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
}

function handleImage(e) {
    var reader = new FileReader();
    var img = "";
    var src = "";
    reader.onload = function(event) {
        img = new Image();
        img.onload = function() {
            DrawOverlay(img);
            DynamicText(img);
        };
        img.src = event.target.result;  
    }

    reader.readAsDataURL(e.target.files[0]); 
}

function DynamicText(img) {
    document.getElementById('top-text-input').addEventListener('keyup', function() {
      text_title = this.value;
      DrawOverlay(img);
      DrawText(); 
    });
  }

function DrawText() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    ctx.fillStyle = "white";
    ctx.textBaseline = 'middle';
    ctx.font = "25px 'Montserrat'";
    ctx.textAlign = 'center';
    wrapText(ctx, text_title, x, 15, 370, 25);
    // ctx.fillText(text_title, x, 15);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }