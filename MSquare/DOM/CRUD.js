/* Document Object Model (CRUD)*/

//Create(C)

const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcome To Yangon");
h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body");
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

//Read(R)

const readH1Elemnt = document.getElementsByTagName("h1")[0];
console.log("Text inside before element is", readH1Elemnt.textContent);

//Update(D)

readH1Elemnt.textContent = "Welcome To Mahlaing";
console.log("Text inside after element is", readH1Elemnt.textContent);

//Delete

readH1Elemnt.remove();
