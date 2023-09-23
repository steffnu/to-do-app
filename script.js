const input = document.getElementById("input");
const todos = document.getElementById("todos");
const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const todoText = input.value;

    if(todoText){
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;
        todos.appendChild(todoEl);
    }
});
