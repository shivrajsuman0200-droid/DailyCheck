// model.ts
type TaskStatus = "todo" | "in-progress" | "done" ;

interface Task {
    id:number;
    tittle:string;
    status:TaskStatus;
}

// Add new task 
let nextId = 1;
function addTask(tasks:Task[],tittle:string):Task[]{
    const newTask: Task = {id:nextId++,tittle,status:"todo"};
    return [...tasks,newTask]
}   

// Mark a task done by id
function completeTask(tasks:Task[],id:number):Task[]{
    return tasks.map((t)=>(t.id===id?{...t,status:"done"}:t));
}

// Retrun the tasks matching the given status
function filterByStatus(tasks:Task[],status:TaskStatus):Task[]{
    return tasks.filter((t)=> t.status === status)
}

// Delete task
function deleteTask(tasks:Task[],id:number):Task[]{
    return tasks.filter((t)=>t.id !== id)
}


function advanceTask(tasks:Task[],id:number):Task[]{
     return tasks.map((t)=>(t.id===id?{
       ...t,
       status:t.status==="todo"?"in-progress"
       :t.status === "in-progress"?"done":t.status
       
    }
    
:t))
};


function countByStatus(tasks:Task[],status:TaskStatus):number{
    const selectedTask = tasks.filter((t)=>t.status=status)
    return selectedTask.length ;
}





