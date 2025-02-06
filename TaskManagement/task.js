tasks =[
    { 
        id:5636577,
        taskName: "frontend",
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
        status: "running",
      },
    { 
        id:26498709,
        taskName: "backend",
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
        status: "started",
      },
]


function renderTask(){
  document.querySelector('#taskList').innerHTML = tasks.map(
    (task, index) =>`
                 <tr>
            <th scope="row">${index+1}</th>
            <td>${task.taskName}</td>
            <td>${task.discription}</td>
            <td>${task.status}</td>
            <td>

                <button class="btn btn-success">Edit</button>
                <button class="btn btn-danger" onclick='deleteTaskWithIndex(${index})'>DeleteWithIndex</button>
                <button class="btn btn-danger" onclick='deleteTaskByID(${task.id})'>DeleteByID</button>



              </td>
            
            </tr>     
  `)
}




deleteTaskWithIndex = (INEDX) =>{
  console.log("deleted successfully")
  console.log(INEDX)
  tasks.splice(INEDX, 1);
  console.log(tasks)
  renderTask();
}
 deleteTaskByID = (ID) =>{
  console.log(ID)
   IFIndex = tasks.findIndex((t)=> t.id == ID)
   console.log(IFIndex)
   if(IFIndex == -1){
    alert('task not found')
     }else{
      tasks.splice(IFIndex, 1);
      renderTask();
     }
 }

function addNewTask(){
  newTask = document.getElementById('newTaskName').value
  newDescription = document.getElementById('discription').value
  console.log(newTask, newDescription);
  newTask = {
    id:Date.now()+Math.floor(Math.random()),
    taskName:newTask,
    description:newDescription,
    status:'yet to start',
  }
  console.log(newTask)
  tasks.push(newTask);
  renderTask()
}
renderTask();

