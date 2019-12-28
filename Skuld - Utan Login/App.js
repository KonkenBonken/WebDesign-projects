function AddNew() {
document.getElementById("popup").style.display = "block";
document.getElementById("AddNew").style.display = "none";
}
function plus() {
    document.getElementById("plus").stepUp(5);
    console.log("den kanske funka")
}

function add() {
  var y1 = '<table border="0" class="MainTable"><tr><th class="Text">';
  var y2 = document.getElementById('namn1').value;
  var y3 = '</th><th class="Mellan"></th><th class="Text">';
  var y4 = document.getElementById('pris').value;
  var y5 = '</th><th class="Mellan"></th><th class="Text">';
  var y6 = document.getElementById('namn2').value;
  var y7 = '</th><th><img src="Trash.png" class="trash" id="trash" onclick="this.parentElement.parentElement.remove();"></th></tr>';
  var klar = y1 + y2 + y3 + y4 + y5 + y6 + y7;
    document.getElementById('MainTableDiv').innerHTML += klar;
    document.getElementById("popup").style.display = "none";
    document.getElementById("AddNew").style.display = "block";
    document.getElementById("namn1").value = ""
    document.getElementById("pris").value = "0"
    document.getElementById("namn2").value = ""

}
