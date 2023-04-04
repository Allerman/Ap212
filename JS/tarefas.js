const inputBox=document.getElementById("input-box");
const listItens=document.getElementById("listItens");

function addTask(){
    if(inputBox.value === ''){
        alert("Voce tem que adicinar algo!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listItens.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData()
}
//adding with ENTER
inputBox.addEventListener('keypress',(e)=>{
    if(e.keyCode===13){
        addTask();
    }})


//pointing to task completion
listItens.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
//deleting the task
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);


//saving the task in the browser
function saveData(){
    localStorage.setItem("data", listItens.innerHTML)
}
//showing the task in the browser
function showTask(){
    listItens.innerHTML=localStorage.getItem("data");
}

showTask();