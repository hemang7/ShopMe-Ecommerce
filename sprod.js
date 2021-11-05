var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    mainImg.src = smallImg[i].src;
  };
}
