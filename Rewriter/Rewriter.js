                      const sleep = (milliseconds) => {
                      return new Promise(resolve => setTimeout(resolve, milliseconds))};

                      const delShiftLeft = (arr, index) => arr.slice(0,index).concat(arr.slice(index+1));




function Run() {
  var check=document.querySelector("#Input").innerHTML.split("");
  var check2=check[0]+check[1]+check[2]+check[3]+check[4];
  if (check2 != "<span") {
var jahajabbade=0;

  var synarr = delShiftLeft(document.getElementById("syns").innerHTML.replace(/\n/g, "").replace(/\?\?\?/g, "???===").split("==="), 0);
          // //console.log(synarr);
          // //console.log(synarr.indexOf("abdikera"));
  var inputArr = document.getElementById('Input').innerText.toLowerCase().split(" ")
  var inputArrOrigStor = document.getElementById('Input').innerText.split(" ")
  ////console.log(synarr.indexOf(inputArr[0]));
  var results = "";
  for (var i = 0; i < inputArr.length; i++) {
    var resultsyns = "";
    var resultsord="";
if (synarr.indexOf(inputArr[i]) != -1) {
//console.log(inputArr[i]+"-----");
    //console.log(synarr[synarr.indexOf(inputArr[i])+1]);
    var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+1]
    if (synarr[synarr.indexOf(inputArr[i])+2] == synarr[synarr.indexOf(inputArr[i])]) {
    //console.log(synarr[synarr.indexOf(inputArr[i])+3]);
    var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+3]
        if (synarr[synarr.indexOf(inputArr[i])+4] == synarr[synarr.indexOf(inputArr[i])]) {
        //console.log(synarr[synarr.indexOf(inputArr[i])+5]);
        var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+5]
          if (synarr[synarr.indexOf(inputArr[i])+6] == synarr[synarr.indexOf(inputArr[i])]) {
          //console.log(synarr[synarr.indexOf(inputArr[i])+7]);
          var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+7]
            if (synarr[synarr.indexOf(inputArr[i])+8] == synarr[synarr.indexOf(inputArr[i])]) {
            //console.log(synarr[synarr.indexOf(inputArr[i])+9]);
            var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+9]
              if (synarr[synarr.indexOf(inputArr[i])+10] == synarr[synarr.indexOf(inputArr[i])]) {
              //console.log(synarr[synarr.indexOf(inputArr[i])+11]);
              var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+11]
                if (synarr[synarr.indexOf(inputArr[i])+12] == synarr[synarr.indexOf(inputArr[i])]) {
                //console.log(synarr[synarr.indexOf(inputArr[i])+13]);
                var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+13]
                  if (synarr[synarr.indexOf(inputArr[i])+14] == synarr[synarr.indexOf(inputArr[i])]) {
                  //console.log(synarr[synarr.indexOf(inputArr[i])+15]);
                  var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+15]
                    if (synarr[synarr.indexOf(inputArr[i])+16] == synarr[synarr.indexOf(inputArr[i])]) {
                    //console.log(synarr[synarr.indexOf(inputArr[i])+17]);
                    var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+17]
                      if (synarr[synarr.indexOf(inputArr[i])+18] == synarr[synarr.indexOf(inputArr[i])]) {
                      //console.log(synarr[synarr.indexOf(inputArr[i])+19]);
                      var resultsyns=resultsyns+synarr[synarr.indexOf(inputArr[i])+19]
      }}}}}}}}}

//console.log(resultsyns);
jahajabbade++;
var resultsord="<span class=\"ordbpp\" id=\""+resultsyns+"\" onclick=\"openpopup("+i+")\">"+inputArrOrigStor[i]+"<span class=\"popup "+i+"\" >"+"<span class=\"popuptext\" onclick=\"changeord(this)\"><span class=\"origianlpp\">"+inputArrOrigStor[i]+"</span><br>"+resultsyns.slice(0, -3).replace(/\?\?\?/g, "</span><br><span class=\"popuptext\" onclick=\"changeord(this)\">")+"</span></span>";
//console.log("span:    "+resultsord);
//console.log("---------------------------");   //onclick=\"changeord("+i+")\"
} else {
  var resultsord=inputArrOrigStor[i];
}
var results = results+resultsord+" ";
//document.getElementsByClassName("popup")[i].innerHTML =
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//console.log(results);
}//for
//console.log("---------------------------");//console.log("---------------------------");
//console.log(results);
document.getElementById('Input').innerHTML = results;
document.getElementById('Input').contentEditable = "false";

}
  for (var b = 0; b < document.getElementsByClassName("popup").length; b++) {
    document.getElementsByClassName("popup")[b].style.marginLeft = "-25";             //"-"+document.querySelectorAll(".ordbpp")[0].children[b].offsetWidth
  }
  for (var i = 0; i < document.querySelector("#Input").getElementsByTagName("*").length; i++) {
    document.querySelector("#Input").getElementsByTagName("*")[i].style.zIndex = i
  }document.querySelector("#all > button").style.display = "none";


Setonclick();
} //Run()
function Setonclick() {
  for (var a = 0; a < document.querySelectorAll("span.popup").length; a++) {
        for (var b = 0; b < document.querySelectorAll("span.popup")[0].children.length; b++) {
  //        document.querySelectorAll("span.popup")[a].querySelectorAll("span.popuptext")[b].style.backgroundColor = "red";
    }
  }
}

function openpopup(id) {sleep(id).then(() => {
  //console.log(id);
  for (var i = 0; i < document.getElementsByClassName("show").length; i++) {
    document.getElementsByClassName("show")[i].classList.remove("show");
  }
document.getElementsByClassName("popup "+id)[0].classList.add("show");});
}


function changeord(id) {
// console.log(id.innerText);
if (id.innerText.split("\n").length != 1) {     // om det är den första som är klickan(den men originaltexten(den röda))
  // console.log("Ja");
  id.parentElement.parentElement.innerHTML = id.innerText.split("\n")[1]+"<"+id.parentElement.parentElement.innerHTML.replace("<", "_._").split("_._")[1]
} else {
  id.parentElement.parentElement.innerHTML = id.innerText+"<"+id.parentElement.parentElement.innerHTML.replace("<", "_._").split("_._")[1]
//document.getElementsByClassName(id)[0].parentElement
}}


//document.getElementsByClassName("popup")[i].innerHTML = "<span class=\"popuptext\" onclick=\"changeord("+i+")\""+document.getElementsByClassName("popup")[i].parentElement.id.replace(/\?\?\?/g, "</span><br><span class=\"popuptext\" onclick=\"changeord("+i+")\"").slice(0, -50);
