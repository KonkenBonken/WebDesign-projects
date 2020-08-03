//console.time();
// var netflix = "";
// document.querySelector("#netflixlist_paginate > span > a:nth-child(1)").click();
// for (var b = 0; b < 122; b++) {
//   for (var i = 0; i < document.querySelector("#netflixlist > tbody").children.length; i++) {
//   var netflix = netflix + "???" + document.querySelector("#netflixlist > tbody").children[i].children[2].innerText + "!!!" + document.querySelector("#netflixlist > tbody").children[i].children[5].innerText.split("/")[0] + "!!!" + document.querySelector("#netflixlist > tbody").children[i].children[1].children[0].src;
//   }
// document.querySelector("#netflixlist_next").click();};
// console.log(netflix.split("???"));
// console.timeEnd();

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};
//sleep(60000).then(() => {});
//});
function load() {
  document.querySelector("div#div").children[0].src = getrandfilm().split("!!!")[2];
  document.querySelector("div#div").children[2].src = getrandfilm().split("!!!")[2];
  document.querySelector("div#div").children[4].src = getrandfilm().split("!!!")[2];
  settitle();
}


function rollclass() {
  var imgtagarr = document.querySelector("#div").innerHTML.replace(/\n/g, "").split("<span></span>");
  document.querySelector("#div").innerHTML = imgtagarr[3] + "<span></span>" + imgtagarr[4] + "<span></span>" + imgtagarr[1] + "<span></span>" + imgtagarr[2] + "<span></span>" + imgtagarr[3];
  sleep(document.querySelector("div#div").children[2].style.animationDuration.split("s")[0] * 500).then(() => {
    settitle();
  });
}

function setanidur(sec) {
  for (var i = 0; i < 5; i++) {
    document.querySelector("div#div").children[i * 2].style.animationDuration = sec + "s";
  }
}

function getrandfilm() { //Avengers!!!9.3!!!https://occ-0-...
  var filmarr = document.getElementById("allist").innerText.split("???")
  return (filmarr[Math.floor(Math.random() * filmarr.length)])
}

function setutsrc() {
  var filmarr = document.getElementById("allist").innerText.split("???");
  document.querySelector("div#div").children[6].src = getrandfilm().split("!!!")[2]
}

function randomise(sec) {
  setanidur(sec);
  var filmarr = document.getElementById("allist").innerText.split("???");
  rollclass();
  sleep(document.querySelector("div#div").children[2].style.animationDuration.split("s")[0] * 1000).then(() => {
    setutsrc();
  });
}

function scroll() {
  if (document.querySelector("p#scrollstop").innerText.split("!")[1] == 0) {
    randomise(document.querySelector("p#scrollstop").innerText.split("!")[0]);
    sleep(Number(document.querySelector("p#scrollstop").innerText.split("!")[0]) * 1000).then(() => {
      scroll();
    });
  }
}

function fadedown() {
  if (document.querySelector("p#scrollstop").innerText.split("!")[1] == 0) {
    document.querySelector("p#scrollstop").innerText = Number(Number(document.querySelector("p#scrollstop").innerText.split("!")[0]) + 0.02) + "!0"
    sleep(Number(100)).then(() => {
      fadedown();
    });
  }

}

function startrandom(sec) {
  document.querySelector("#scrollstop").innerText = "0.05!0";
  fadedown();
  scroll();
  sleep(sec * 1000).then(() => {
    document.querySelector("#scrollstop").innerText = document.querySelector("p#scrollstop").innerText.split("!")[0] + "!1";
  });
}

function settitle() {
  var filmarr = document.getElementById("allist").innerText.replace(/\?\?\?/g, "!!!").split("!!!");
  var title = filmarr[filmarr.indexOf(document.querySelector("#div > img:nth-child(3)").src) - 2];
  var des = filmarr[filmarr.indexOf(document.querySelector("#div > img:nth-child(3)").src) + 1];
  var rat = filmarr[filmarr.indexOf(document.querySelector("#div > img:nth-child(3)").src) - 1];
  var min = filmarr[filmarr.indexOf(document.querySelector("#div > img:nth-child(3)").src) + 2];

  document.querySelector("p.title").innerHTML = "<span class=\"title\">" + title + "</span><br><span class=\"des\">" + des + "</span><br><div class=\"barytt\"><div class=\"barinn\" style=\"height:24px;width:" + Number(Number(rat) * 10) + "%\">" + rat + "/10</div></div><br><span class=\"minsif\">" + min + "</span><span class=\"mintex\"> <span class=\"M\">M</span>inutes</span>"
}
