function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "[]";
    cell2.innerHTML = "[]";
  }
  
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
  }

  function mouseOver() {
	alert("Hey, I told you not to hover over me!");
}