document.addEventListener("DOMContentLoaded", function () {
    // create hyperlinks with logging
    var hyperlinks = document.getElementsByTagName("A");
    for(var i in hyperlinks)
        createLogHyperlink(hyperlinks[i]);
    // GET quote and mindtraining resource, set attributes
    var httpGet = new XMLHttpRequest();
    httpGet.open("GET", "https://api.jenseneducation.se/services/ce/newtab/v1?quoteid="+(Math.floor(Math.random() * 31) + 1), true);
    httpGet.onreadystatechange = function() {
        if (httpGet.readyState != 4 || httpGet.status != 200)
            return;
        var response = JSON.parse(httpGet.responseText);
        document.getElementById("citat").innerHTML = response.quote.quote+"</br>- "+response.quote.person;
    }
    httpGet.setRequestHeader("apikey", "pID1lAGbNnI42foQzg7VtImzXABgaGpw");
    httpGet.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    httpGet.setRequestHeader("Accept", "application/json;charset=utf-8");
    httpGet.send();
});
// add event listener for click that acts as a hyperlink (with logging)
function createLogHyperlink(element) {
    // we dont care about elements w/o attributes
    if (typeof element.getAttribute === "undefined")
        return;
    var href = element.getAttribute("href");
    var title = element.getAttribute("title");
    element.addEventListener("click", function() {
        log("hyperlink", "info", title);
        setTimeout(function () {
            location.href = href;
        }, 100);
    });
    // remove actual href
    element.href = "#";
}
// POST log
function log(process, level, message) {
    var httpPost = new XMLHttpRequest();
    httpPost.open("POST", "https://api.jenseneducation.se/logger/v1", true);
    httpPost.setRequestHeader("apikey", "pID1lAGbNnI42foQzg7VtImzXABgaGpw");
    httpPost.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    httpPost.setRequestHeader("Accept", "application/json;charset=utf-8");
    httpPost.send(JSON.stringify({
        sourceSystem: "newtabElevGrundskola",
        process: process,
        processISOTimestamp: new Date().toISOString(),
        level: level,
        message: message,
        custom: null
    }));
}



                        const sleep = (milliseconds) => {
                          return new Promise(resolve => setTimeout(resolve, milliseconds))};

                          function shuffle(array) {
                            array.sort(() => Math.random() - 0.5);
                          }
function NewsRoll() {
       for (var i = 1; i < 21; i++) {
         Reload2(i);
       };
       sleep(201500).then(() => {NewsRoll(); Nyheter(20);});
     }
     function Reload(id) {removeFadeOut(document.getElementById("Div" + id), 1500);};

     function Reload2(id) {var tid8746 = id * 10000; sleep(tid8746).then(() => {removeFadeOut(document.getElementById("Div" + id), 1500);});}

                   function removeFadeOut( el, speed ) {
                       var seconds = speed/1000;
                       el.style.transition = "opacity "+seconds+"s ease";

                       el.style.opacity = 0;
                       setTimeout(function() {
                           el.parentNode.appendChild(el);
                           el.removeAttribute("style");

                       }, speed);}
NewsRoll();
Nyheter();
function Nyheter() {
  fetch('https://newsapi.org/v2/top-headlines?country=se&apiKey=2be7722aa456474dbb1743d990ef852a&sortBy=publishedAt')
  .then(dataWrappedByPromise => dataWrappedByPromise.json())
  .then(data => {
  var artikelNr = -1;
var i;
document.getElementById("Nyheterdiv").innerHTML = "";
for (i = 0; i < 20; i++) {
  var artikelNr = artikelNr + 1;
    var artikelNr1 = artikelNr + 1
      var title = data.articles[artikelNr].title.split(" - ")[0];
      var description = data.articles[artikelNr].description
      var source = data.articles[artikelNr].source.name
      var sourceUrl = data.articles[artikelNr].url
      var tid = data.articles[artikelNr].publishedAt.split("T")[1].split("Z")[0]
      document.getElementById("Nyheterdiv").innerHTML += "<div id=\"Div" + artikelNr1 + "\"><p class=\"newsTit\" id=\"newsTit" + artikelNr1 + "\"></p><p class=\"newsDes\" id=\"newsDes" + artikelNr1 + "\"></p><nobr><p class=\"newsSor\"><a id=\"newsSor" + artikelNr1 + "\" href=></a><img src=\"Cross.webp\" onclick=\"Reload(" + artikelNr1 + ")\" id=\"Reload" + artikelNr1 + "\" class=\"Reload\"></nobr></p></div>"
      document.getElementById("newsTit" + artikelNr1).innerHTML = title
      document.getElementById("newsDes" + artikelNr1).innerHTML = description
      document.getElementById("newsSor" + artikelNr1).innerHTML = "K&auml;lla:  " + source + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tid + "&nbsp;&nbsp;" + "<br><br><br><br>"
        document.getElementById("newsSor" + artikelNr1).setAttribute("href", sourceUrl);

document.getElementById("Dagens").innerHTML = "<br><br>&nbsp;&nbsp;Dagens nyheter:";

}
document.getElementById("newsSor" + artikelNr1).innerHTML = "K&auml;lla:  " + source + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tid + "<br><br><br><br>"
          //console.log("NyheterAPI:");
          //console.log(data);
  })}
function LoadedBG() {

  document.getElementsByClassName("whole").style.transition = "opacity 1s ease";
}

function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
     var jokejson = JSON.parse(this.responseText);
	     console.log(jokejson.contents.jokes[0].joke.text);
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

sleep(500).then(() => {skamt();});
function skamt() {
  var skamtarr = document.getElementById("skamt").innerHTML.replace(/!!!/g, "!!!?").split("!!!").sort(() => Math.random() - 0.5).toString().replace(/\?/,"").replace(/\,\?/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
  document.getElementById('Joke').innerHTML = skamtarr;
}












//??? mellan filmer
///!!! mellan delar av filmer
for (var i = 0; i < 122; i++) {
  for (var i = 0; i < document.querySelector("#netflixlist > tbody").children.length; i++) {
  var netflix = netflix + "???" + document.querySelector("#netflixlist > tbody").children[i].children[1].children[0].src + "!!!" + document.querySelector("#netflixlist > tbody").children[1].children[2].innerText + "!!!" + document.querySelector("#netflixlist > tbody").children[1].children[5].innerText.split("/")[0]
  document.querySelector("#netflixlist_next").click()
}}; 
console.log(netflix);
