//Select the input box
let taskInput= document.querySelector("#taskInput");
//Select the Add button
let addButton=document.querySelector("#addButton");
//Select the odered list
let taskList=document.querySelector("#taskList");
//add click event to the Add button
addButton.addEventListener("click" ,function(){
    //check the whether the input is empty
    if(taskInput.value ===""){
        //show message when input is empty
    alert("Enter a task");
}else{
    //create a new list item
    let li=document.createElement("li");
    //Display the task inside the list item
    li.innerText = taskInput.value;
    //Create a delete button
    let deleteButton= document.createElement("Button");
    deleteButton.innerText="Delete";
    //add the delete button inside the list item
    li.append(deleteButton);
    //add the list item to the ordered list
    taskList.append(li);
    //add click event to delete button
    deleteButton.addEventListener("click" ,function(){
        //Remove the selected task 
        li.remove();
    });
    //Clear the input after adding the task
    taskInput.value ="";
}
    
});