console.log("hello event");
let load = () => {
    // let head = document.getElementById("head");
    // head.style.color = 'red'
    // alert("loading..........")
    document.body.style.backgroundColor = 'black'
}
// btn click korle funk run hobe
let showMessage = () => {

    alert("button clicked!")
}
// Arrow funk btn clicked code hre now;
let arrowBtn = document.getElementById("arrowBtn");
arrowBtn.addEventListener("click", () => {
    console.log("arrow function clicked!");
})

// Multiple event on same btn code here now;
let multBtn = document.getElementById("multBtn");
multBtn.addEventListener("click", () => {
    console.log("multbtn clicked");
})
multBtn.addEventListener("mouseover", () => {
    console.log("mouseover clicked");
})
multBtn.addEventListener("mouseout", () => {
    console.log("mouse out btn clicked");
})
// Toggle clase code here now;
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})
toggleBtn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
})
// event target code start now;
let buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach(ele => {
    // console.log(ele);
    ele.addEventListener("click", function (e) {
        // console.log(e.target.innerText);
        e.target.style.backgroundColor = 'red'
    })
})

// btn and span;
let tagBtn = document.getElementById("tagBtn");
tagBtn.addEventListener("click", function (e) {
    // console.log("btn clicked",e.target);
    if (e.target.tagName === "SPAN") {
        console.log("span btn clicked");
    } else if (e.target.tagName === "BUTTON") {
        console.log("btn click");
    }
})


// Update 
let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", () => {
    // console.log("up btn clicked");
    let inputBox = document.getElementById("inputBox");
    // console.log(inputBox.value);
    let para = document.getElementById("para");
    // console.log(para);
    para.innerText = inputBox.value;
    // para.appendChild(inputBox)
    inputBox.value = ""
})
// All comments code start now;
let commentBtn = document.getElementById("commentBtn");
commentBtn.addEventListener("click", () => {
    // console.log("commentBtn clicked");
    let textArea = document.getElementById("textArea");
    // console.log();
    let textAreaValue = textArea.value
    // console.log(textAreaValue);
    let sectionComments = document.getElementById("sectionComments");
    // console.log(sectionComments);
    let creatDiv = document.createElement("div");
    creatDiv.classList.add("style")
    let createPara = document.createElement("p");
    creatDiv.appendChild(createPara)
    createPara.innerText = textAreaValue;
    sectionComments.appendChild(creatDiv)
})

// Keyboard event code start;
document.addEventListener("keydown", (e) => {
    // console.log("press",e.key);
})
document.addEventListener("keyup", (e) => {
    // console.log("press",e.key);
})
document.addEventListener("keypress", (e) => {
    // console.log("press",e.key);
})

// Wndow events;
window.addEventListener("scroll", () => {
    // console.log("Scrolling............");
})

// github repo delete system;
let deleteBtn = document.getElementById("deleteBtn");
let msg = document.getElementById("msg");
deleteBtn.addEventListener("click", () => {
    // console.log("git hub repo delete");
    let confirmDelete = confirm("Are you sure to delete?")
    if (confirmDelete) {
        msg.innerText = "Deleted successfully";
        msg.style.color = 'red'
    } else {
        msg.innerText = "Delete cancelled";
        msg.style.color = "green"
    }
})
// My secret info;
let inputFeild = document.getElementById("inputFeild");
inputFeild.addEventListener("keyup", (e) => {
    const text = e.target.value;
    let deleteBtn2 = document.getElementById("deleteBtn2");
    // console.log(value);
    if (text === "delete") {
        deleteBtn2.removeAttribute("disabled")
        // console.log("match delete");
    } else {
        // console.log("anythik else");
        deleteBtn2.setAttribute("disabled", true)
    }
    // console.log("write",e.target.value);
})
let deleteBtn2 = document.getElementById("deleteBtn2");
deleteBtn2.addEventListener("click", () => {
    // console.log("del2 cl");
    let inputFeild = document.getElementById("inputFeild");
    inputFeild.value = '';
})
// main code here now:
let main = document.getElementById("main");
let child = document.getElementById("child");
let btn = document.getElementById("btn");
main.addEventListener("click",()=>{
    console.log("main clicked");
})
child.addEventListener("click",()=>{
    console.log("child btn clicked");
})
btn.addEventListener("click",()=>{
    console.log(" btn clicked");
})