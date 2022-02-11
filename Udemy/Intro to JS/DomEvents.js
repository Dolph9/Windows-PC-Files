// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("CLICK!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

//Not in the course but adding removal from list functionality
// var removeButton = document.getElementById("remove")
// // remove from list.
// function removeFromList(){
//     var removeli = document.querySelector("ul").getElementsByTagName("li");
//     var lengthOfList = removeli.length;
//     removeli[lengthOfList-1].remove();
//     // return removeli;
// }

// removeButton.addEventListener("click", removeFromList)

function inputLength(){
    return input.value.length
}

function addToList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addAfterClick(){
    if (inputLength() > 0){
        addToList();
    }    
}

function addAfterEnter(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        addToList();
    }
}
// button.addEventListener("click", addAfterClick)
// input.addEventListener("keypress", addAfterEnter)
// removeButton.addEventListener("click", removeFromList)


//Assignment starts here:

function createNewLists(){
    var div = document.createElement("div");
    var li = document.createElement("li");
    var button = document.createElement("button");
    
    div.classList.add("Addition")
    div.style.display = "flex";
    div.style.gap = "5%";
    ul.appendChild(div);
    div.append(li,button);
    //li.classList.add("whatevername")
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    button.classList.add("delClass");
    button.innerHTML = "Delete";
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}
function AAC(){
    if (inputLength() > 0){
        createNewLists();
    }    
}

function AAE(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createNewLists();
    }
}

ul.addEventListener("click", handleUlClick)

button.addEventListener("click", AAC)

input.addEventListener("keypress", AAE)
