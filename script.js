const input = document.querySelector("input");
const ul = document.querySelector("ul.works");
const sampleTasks = document.querySelectorAll("li");
const form = document.querySelector("form");
const ulWorks = document.querySelector("ul.addWorks");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");

const searchTask = (e) => {
const searchText = e.target.value.toLowerCase()
let tasks = [...sampleTasks];
tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
ul.textContent = "";
tasks.forEach(li => ul.appendChild(li))
}

const removeTask = (e) => {
e.target.parentNode.remove();
taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
e.preventDefault()
const titleTask = input.value;
if (titleTask === "") return;
const task = document.createElement('li');
task.className = "task";
task.innerHTML = titleTask + "   <button class='delete'>Usuń</button>";
ulWorks.appendChild(task);
input.value = "";
const liItems = document.querySelectorAll("li.task").length;
taskNumber.textContent = liItems;
task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener("submit", addTask);
input.addEventListener("input", searchTask);