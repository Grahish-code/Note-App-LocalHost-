const notescontainer= document.querySelector(".notes-container");
const btn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
    console.log(localStorage.notes);
    
}

// after this function we will be able to add a writing space , as we click on btn
btn.addEventListener("click",() => {
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.svg";
    notescontainer.appendChild(inputBox).appendChild(img);
     // append child means add an element , (here it means that we have put input box inside notescontainer (notesconatainer.appendchild(input box)) and img in the input box (appendChild(inputBox).appendChild(img)) );
}
)
// after you have made a place to write note , there u have an image of trash , when u click on that img the placebox will be deleted , this function is doing that
notescontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();

        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})



