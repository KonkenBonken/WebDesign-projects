console.log(MemeJson);



let MemeIndex = Number(Math.floor(Math.random()*3229+1));
console.log(MemeIndex);
function generateMemes(n) {

for (var i = 0; i < n; i++) {
  if (MemeIndex >= 3231) {
MemeIndex = Number(Math.floor(Math.random()*2200+1));
  } else {
    var url = MemeJson[MemeIndex].media;
    var id = MemeJson[MemeIndex].id;
  //var ups = MemeJson[MemeIndex].ups;
var div = "<div class='MemeDiv' id='" + id + "'><img onload='IMGload(this)' class='MemeImg' src='" + url + "' />" + thumbelement; // <p class='MemeUps'>" + ups + "</p>
document.querySelector(".AllMemeDiv").innerHTML += div;

MemeIndex++;
    }
  }
}
let thumbelement = "<div class='thumbsdiv'><div class='thumb up' onmousedown='clickedThumb(this, \"up\")'><i class='fa fa-thumbs-up'></i></div><div class='thumb down' onmousedown='clickedThumb(this, \"down\")'><i class='fa fa-thumbs-down'></i></div></div>"

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-300) {
      generateMemes(3);
    }
};
function clickedMore(el) {
  ShowImg(el.parentElement.parentElement.querySelector("img").src);
}
function clickedThumb(el, d) {
  el.classList.toggle("active");
  if (d == "up") {
    el.parentElement.lastElementChild.classList.remove("active");
  } else if (d == "down") {
    el.parentElement.firstElementChild.classList.remove("active");
  }
}
function IMGload(el) {
  if (el.naturalHeight == 60 && el.naturalWidth == 130) {
    el.parentElement.classList.add("error")
    el.parentElement.remove();
    console.error("Error removed");
  } else {
  var h = el.height;
el.removeAttribute("onload");
  if (h > window.innerHeight || Number(Math.random()) > 0.8) { //
    el.parentElement.classList.add("long")
    el.parentElement.innerHTML += "<div class='clickForMore'><div onclick='clickedMore(this)'><p>See Full Image</p></div></div>"
  }
  }
}
  let showImgDiv = "<div class='DarkPage'><i class='fa fa-close' /><img class='ImgLarge'/></div>"
function ShowImg() {
document.body.innerHTML = showImgDiv + document.body.innerHTML
}
