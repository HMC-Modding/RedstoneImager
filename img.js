import mergeImages from 'merge-images';

var img = document.querySelector('img');

var button = document.getElementById("pressButton");

function def() {

  var width = document.getElementById("widthInput").value;
  var height = document.getElementById("heightInput").value;
  
  mergeImages([
    { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 0, y: 0 },
    { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 160, y: 0 },
    { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 0, y: 0 }
  ], {
    width: 160*parseInt(width),
    height: 160*parseInt(height)
  })
    .then(b64 => img.src = b64);

  img.setAttribute("width", (parseInt(width)*16).toString());
  img.setAttribute("height", (parseInt(height)*16).toString());
}

button.addEventListener("click", def)
