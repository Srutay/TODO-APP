const inputbox = document.getElementById("inputbox");
const listcont= document.getElementById("listcontainer");

function addTask(){
       if(inputbox.value==='')
       alert("PLEASE TYPE YOUR TO-DO");
       else
       {
           let li=document.createElement("li");
           li.innerHTML = inputbox.value;
           listcont.appendChild(li);

           let span = document.createElement("span");
           span.innerHTML = "\u00d7"
           li.appendChild(span);
       }
       inputbox.value=''
       savedata();

}

listcont.addEventListener("click",function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove("checked");
        savedata();
    }
},false)

//local storage 

function savedata(){
     localStorage.setItem("data", listcont.innerHTML);
}

function showtask(){
    listcont.innerHTML = localStorage.getItem("data")
}
showtask();