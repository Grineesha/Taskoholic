let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



const container =
document.getElementById("taskContainer");



document.getElementById("addBtn").onclick=function(){

document.getElementById("taskForm")
.classList.remove("hidden");

};




function closeForm(){

document.getElementById("taskForm")
.classList.add("hidden");

}




function addTask(){


let name =
document.getElementById("taskInput").value;


let date =
document.getElementById("dateInput").value;



if(name.trim()==""){

alert("Please enter a task");

return;

}



let task={

id:Date.now(),

name:name,

date:date,

completed:false

};



tasks.push(task);


saveTasks();


displayTasks();



document.getElementById("taskInput").value="";

document.getElementById("dateInput").value="";


closeForm();


}




function displayTasks(){


container.innerHTML="";



tasks.forEach(task=>{


let card=document.createElement("div");


card.className="task";



card.innerHTML=`


<h3 class="${task.completed?'complete':''}">

${task.completed ? "☑️ " : ""}${task.name}

</h3>



${task.date ?

`<p class="date">
📅 ${task.date} ➕
</p>`

:

""

}



<div class="actions">


<button class="done"
onclick="completeTask(${task.id})">

${task.completed ? "Completed":"Done ✓"}

</button>



<button class="delete"
onclick="deleteTask(${task.id})">

🗑

</button>


</div>


`;



container.appendChild(card);


});


}





function completeTask(id){


tasks =
tasks.map(task=>{


if(task.id===id){

task.completed=!task.completed;

}


return task;


});



saveTasks();

displayTasks();


}





function deleteTask(id){


tasks =
tasks.filter(task=>task.id!==id);


saveTasks();

displayTasks();


}




function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}





// THEME


let themeBtn =
document.getElementById("themeBtn");



themeBtn.onclick=function(){


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


themeBtn.innerHTML="☀️";

localStorage.setItem("theme","dark");


}

else{


themeBtn.innerHTML="🌙";

localStorage.setItem("theme","light");


}


};




if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}



displayTasks();