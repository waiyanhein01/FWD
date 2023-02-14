const myButton = document.getElementById("myButton");
const myImage = document.getElementsByClassName("girl")[0];
const originalImage = myImage.src;
const myArrays = [
    "https://images.unsplash.com/photo-1672794444732-e007954a177c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1672753755413-5a6e9ef81e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1672710011061-7076efd95dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1672684732224-d5a370136915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
]

let counter = 0;
const myFunction = () => {
    if (counter === 5){
        myImage.src = originalImage;
        counter = 0;
        return;
    }
    const imageLink = myArrays[counter];
    myImage.src = imageLink;
    counter += 1;
    console.log ("My image is:", counter);
}
document.addEventListener("click", myFunction)