const addInput = document.querySelector("#addInput");
let data = JSON.parse(localStorage.getItem("data")) || [];

/* returning html element for tasks */
function itemHtml(item) {
   return ` <li>
   <input type="checkbox" onclick="doneTask('${item.id}')" id="item-${
      item.id
   }" ${item.done ? "checked" : ""}> 
   <label for="item-${item.id}">${item.title}</label> 
   <span onclick="deletionTask('${item.id}')">❌</span>  
</li>`;
}
/* function which: drawing data in html page */
function drawTasks(data) {
   const plates = document.querySelector(".plates");
   plates.innerHTML = "";
   data.forEach((tasks) => {
      plates.innerHTML += itemHtml(tasks);
   });
}
/* function which: pushed task in data array */
function pushData(task) {
   data.push(task);
   localStorage.setItem("data", JSON.stringify(data));
}
/* function which: checked done or didn't*/
function doneTask(i) {
   // data[i].done = !data[i].done;
   data = data.map((task) => {
      if (task.id == i) {
         task.done = !task.done;
      }
      return task;
   });
   localStorage.setItem("data", JSON.stringify(data));
}
/* function which: deleted task */
function deletionTask(i) {
   data = data.filter((task) => task.id != i);
   localStorage.setItem("data", JSON.stringify(data));
   drawTasks(data);
}

const addItemForm = document.querySelector(".add-item");
addItemForm.addEventListener("submit", function (e) {
   e.preventDefault();
   const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
   const task = {
      id,
      done: false,
      title: addInput.value,
   };
   pushData(task);
   drawTasks(data);

   this.reset();
});
drawTasks(data);
