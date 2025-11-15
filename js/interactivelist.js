const newItemInput = document.getElementById("newItem");
const itemButton = document.getElementById("add-item");
const itemList = document.getElementById("item-list");

itemButton.addEventListener("click", function() {
    const itemText = newItemInput.value.trim();

    if (itemText !== "") {
        const li = document.createElement("li");
        li.textContent = itemText;
        itemList.appendChild(li);
        newItemInput.value = ""; // clear the input
    }
});
