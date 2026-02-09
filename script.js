console.log("hello event");
let load = ()=>{
    // let head = document.getElementById("head");
    // head.style.color = 'red'
    // alert("loading..........")
    document.body.style.backgroundColor = 'black'
}
// btn click korle funk run hobe
let showMessage = ()=>{
    
    alert("button clicked!")
}
// Arrow funk btn clicked code hre now;
let arrowBtn = document.getElementById("arrowBtn");
arrowBtn.addEventListener("click",()=>{
    console.log("arrow function clicked!");
})

// Multiple event on same btn code here now;
let multBtn = document.getElementById("multBtn");
multBtn.addEventListener("click",()=>{
    console.log("multbtn clicked");
})
multBtn.addEventListener("mouseover",()=>{
    console.log("mouseover clicked");
})
multBtn.addEventListener("mouseout",()=>{
    console.log("mouse out btn clicked");
})
// Toggle clase code here now;
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})
toggleBtn.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
})
// event target code start now;
let buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach(ele=>{
    // console.log(ele);
    ele.addEventListener("click",function(e){
        // console.log(e.target.innerText);
        e.target.style.backgroundColor = 'red'
    })
})

// btn and span;
let tagBtn = document.getElementById("tagBtn");
tagBtn.addEventListener("click",function(e){
    // console.log("btn clicked",e.target);
    if(e.target.tagName === "SPAN"){
        console.log("span btn clicked");
    }else if(e.target.tagName === "BUTTON"){
        console.log("btn click");
    }
})


// Update 
let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click",()=>{
    // console.log("up btn clicked");
    let inputBox = document.getElementById("inputBox");
    // console.log(inputBox.value);
    let para = document.getElementById("para");
    // console.log(para);
    para.innerText = inputBox.value;
    para.appendChild(inputBox)
    inputBox.value = ""
})