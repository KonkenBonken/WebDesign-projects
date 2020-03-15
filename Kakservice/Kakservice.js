          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))};
              //sleep(60000).then(() => {});


var allInfo = decodeURI(allInfo);


function getball(color) {
    return "<span class='ball' style='color:" + color + ";'>&#9679;</span>";
}
// console.log(allInfo);

var InfoArray = [];

for (var i = 0; i < allInfo.split("??").length; i++) {
   InfoArray[i] = allInfo.split("??")[i].split("!!");
}
for (var i = 0; i < InfoArray.length; i++) {
  for (var j = 0; j < InfoArray[i].length; j++) {
    InfoArray[i][j] = InfoArray[i][j].trim();
  }
}
let div;
let alladiv = " ";

 for (var i = 0; i < InfoArray.length; i++) {
  div = "<div class='produktDiv " + i + "'>"
  div += "<div class='bilddiv'><div class='prisdiv'><p><span class='femti'>50</span><span class='kr'>kr</span></p></div><img class='bild' src='";
  div += InfoArray[i][1] + "'></div><div class='textdiv'>"
  div += "<h1 class='Titel' style='color:" + InfoArray[i][8] + "'>";
  div += InfoArray[i][0] + "</h1><p class='beskriv'>";
  div += InfoArray[i][4] + "</div><div class='clickformore' onclick='showmore(" + i + ")'><i class='fa fa-caret-square-o-right pil"+i+"'></i>";
  div += "&nbsp;&nbsp;Innehållsdeklaration</div><div class='merinfo dontshow'><p class='Allergiinformation dontshow'>";
  div += InfoArray[i][5] + "</p><table class='näringsV'>";

// for (var j = 0; j < InfoArray[i][6].split("**").length; j++) {
// var näringsarr = InfoArray[i][6].split("**");
// div += "<li class='näringsObj'>" + näringsarr[j] + "</li>";
// }

div += InfoArray[i][6];

  div += "</table><p class='innehåll'>";
  div += InfoArray[i][7] + "</p></div></div></div>";
  alladiv += div
 }
 sleep(1).then(() => {
document.querySelector("div.produkter").innerHTML = alladiv;

for (var i = 0; i < document.querySelectorAll(".produktDiv").length; i++) {
  document.querySelectorAll(".produktDiv")[i].querySelector(".prisdiv").style.backgroundColor = document.querySelectorAll(".produktDiv")[i].querySelector(".Titel").style.color;
}
fixAllergi()
for (var i = 0; i < document.querySelectorAll(".näringsV").length; i++) {
  let table = document.querySelectorAll(".näringsV")[i];
  let thArr = table.querySelectorAll("th");
  for (var j = 0; j < thArr.length; j++) {
    thArr[j].outerHTML = thArr[j].outerHTML.replace(/th/g, "td")
  }
}


});

function fixAllergi() {
  let result;
  for (var i = 0; i < document.querySelectorAll(".Allergiinformation").length; i++) {
    result = "<ul class='AllergiinformationTable'>";
var el = document.querySelectorAll(".Allergiinformation")[i];
// console.log(el);
var inner = el.innerText;
// console.log(inner);
var arr = inner.split("--");
// console.log(arr);

for (var j = 0; j < arr.length; j++) {
  result += "<li>" + arr[j].replace("innehåller", getball("red")).replace("spårav", getball("orange")).replace("inte", getball("green")) + "</li>";


}
result += "</ul>"
result = result.replace(/<[^/>][^>]*><\/[^>]+>/g, "")

  el.innerHTML = result;
  el.classList.toggle("dontshow");
  }
}


function showmore(i) {
  var el = document.querySelectorAll(".produktDiv")[i];
  el.querySelector(".pil"+i).classList.toggle("vrid");
  el.querySelector(".merinfo").classList.toggle("dontshow");
}
