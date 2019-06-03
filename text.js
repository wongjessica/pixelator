/*
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
*/

let rowCount = 0;
let colCount = 1;
let cellsTable = document.getElementById("cells");

//Function adds a row when user prompts
function addRow() {
  let newRow = document.createElement("tr");
  for (let i = 0; i < colCount; i++) {
    let newCell = document.createElement("td");
    newCell.addEventListener("click",colorCell);
    newCell.addEventListener("mouseover",colorCellDrag);
    newRow.appendChild(newCell);
  }
  cellsTable.appendChild(newRow);
  rowCount++;
};

//Function deletes a row when user prompts
function deleteRow() {
  cellsTable.removeChild(cellsTable.lastChild);
  rowCount--;
};

//Function adds a column when user prompts
function addCol() {
  let children = Array.from(cellsTable.children);
  children.forEach((row) => {
    let newCell = document.createElement("td");
    newCell.addEventListener("click",colorCell);
    newCell.addEventListener("mouseover",colorCellDrag);
    row.appendChild(newCell);
  });
  colCount++;
};

//Function deletes a dolumn when user prompts
function deleteCol() {
  let children = Array.from(cellsTable.children);
  children.forEach((row) => {
    row.removeChild(row.lastChild);
  });
  colCount--;
};

//Color Selector, self explanatory :3
let colorSelector = document.getElementById("select-color");
let color;
function updateColor() {
  color = colorSelector.value;
};
updateColor();

//Fills all blocks
function fillAll(){
  let tableChildren = Array.from(cellsTable.children);
  tableChildren.forEach((row) => {
    let rowChildren = Array.from(row.children);
    rowChildren.forEach((cell)=>{
      cell.style.backgroundColor =color;

    });
  });
};

//Fills all uncolored blocks
function fillEmpty(){
  let tableChildren = Array.from(cellsTable.children);
  tableChildren.forEach((row) => {
    let rowChildren = Array.from(row.children);
    rowChildren.forEach((cell)=>{

      if(cell.style.backgroundColor == ""){

        cell.style.backgroundColor =color;
      }
    });
  });
};

//Clears all blocks
function clearB(){
  let tableChildren = Array.from(cellsTable.children);
  tableChildren.forEach((row) => {
    let rowChildren = Array.from(row.children);
    rowChildren.forEach((cell)=>{
      cell.style.backgroundColor ="";

    });
  });
};

//Function to color the cell on user prompt
function colorCell(){
  console.log(this);
  this.style.backgroundColor = color;
};

//Function to work when dragged
function colorCellDrag(param){
  if(param.buttons){

   this.style.backgroundColor = color;
  }

};