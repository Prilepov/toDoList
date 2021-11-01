function toDo() {
  let li = document.createElement("li");
  li.innerHTML = document.getElementById("txt").value;

  let but = document.createElement("button");
  but.innerHTML = "&#935;";
  but.onclick = toDoDelete;

  let through = document.createElement("button");
  through.innerHTML = "&#8744;";
  through.onclick = toDoThrough;   

  li.appendChild(but);
  li.appendChild(through);

  paster.appendChild(li);
}

function toDoDelete() {
  this.parentElement.remove();
}

function toDoThrough() {
  this.parentElement.classList.toggle("through");
}
