const inputTag = document.getElementsByClassName("form-control") [0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer") [0];
let productId = 1;
const control = (event) => {
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div")
    const spanTag = document.createElement("span");
    parentDiv.classList.add("orderList");
    parentDiv.addEventListener("click", () => {
        const exit = parentDiv.classList.contains("parches")
        if (exit) {
            parentDiv.classList.remove("parches");
        } else {
            parentDiv.classList.add("parches"); 
        }
    })
    const product = productId.toString() + ". " + inputValue;
    spanTag.id = productId;
    spanTag.append(product);
    parentDiv.append(spanTag);
    shoppingListTag.append(parentDiv);
    inputTag.value = "";
    productId += 1;
}
inputTag.addEventListener("change", control);

module.exports = control