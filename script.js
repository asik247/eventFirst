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