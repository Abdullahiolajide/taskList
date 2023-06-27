const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('.task-filter');
const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');

addTask.addEventListener('click', addTasks);


// loadEventListeners()
// function loadEventListeners(){
//     filter.addEventListener('keyup', filterTask);
// }

function addTasks(e){
    //  if (taskInput.value === '') {
    //     alert('Add Task');
    //     taskList.innerHTML = '';


    //  }

     const li = document.createElement('li');
     li.className = 'list';

     li.appendChild(document.createTextNode(taskInput.value));


     const deleteBtn = document.createElement('input');
     deleteBtn.className = 'deleteBtns';
     deleteBtn.type = 'button';
     deleteBtn.value = 'DELETE'

     li.appendChild(deleteBtn);

     taskList.appendChild(li)
     if (taskInput.value === '') {
        alert('Add Task');
        taskList.innerHTML = '';


     }

}

taskList.addEventListener('click', removeTask);

function removeTask(e){
    if (e.target.classList.contains('deleteBtns') && confirm('Are you sure')) {
        e.target.parentElement.remove();
    }
}

clearBtn.addEventListener('click', function(){
    taskList.innerHTML = '';
})


filter.addEventListener('keyup', filterTask);

function filterTask(e){
    const find = e.target.value.toLowerCase();
    // document.querySelectorAll('')

    
    document.querySelectorAll('.list').forEach(function(task){
        const item = task.firstChild.textContent;
         if (item.toLowerCase().indexOf(find) != -1){
            task.style.display = 'block';
         }else{
            task.style.display = 'none';
         }
        
    });

}





