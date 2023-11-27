function addTodo() {
    var input = document.getElementById("todo-input");
    var todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = todoText;
    li.onclick = function() {
        this.parentNode.removeChild(this);
    };

    var list = document.getElementById("todo-list");
    list.appendChild(li);

    input.value = " "; 
}
