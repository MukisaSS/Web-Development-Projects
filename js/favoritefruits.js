const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const list = document.getElementById("fruit-list");

for(let fruit of fruits) {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
}

const add_fruit = document.getElementById("add-fruit");
const new_fruit = document.getElementById("new-fruit");

add_fruit.addEventListener("click", function() {
    const fruit_name = new_fruit.value;

    fruits.push(fruit_name);

    const li = document.createElement("li");
    li.textContent = fruit_name;
    list.appendChild(li);
    
})