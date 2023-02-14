/*Useful DOM methods and properties */

const bodyElement = document.getElementsByTagName("body")[0];
//console.log(bodyElement);

//const parentDiv = document.getElementsByClassName("parent")[0];
//bodyElement.innerText = ""; //delete html tag from javascript

const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "text");
parentDiv.classList.remove("text") //if you want delete,you can

const childDivOne = document.createElement("div");
childDivOne.append("childOne");
childDivOne.classList.add("childOne");

const childDivTwo = document.createElement("div");
childDivTwo.append("childTwo");
childDivTwo.classList.add("childTwo");

parentDiv.append(childDivOne, childDivTwo);

bodyElement.appendChild(parentDiv);

// Css read form javascript 

const styleTest = document.getElementsByClassName("styletext")[0];
console.log("Css's width:", getComputedStyle(styleTest).width);
console.log("Css's height:", getComputedStyle(styleTest).height);
console.log("Css's backgroundColor:", getComputedStyle(styleTest).backgroundColor);