

// const heading = document.getElementById("first");
// heading.addEventListener("click", function(){
//     console.log("i was clicked");
    
// })

// const heading2 = document.getElementById("2nd");
// heading2.addEventListener("click", function(){
//     console.log("i am 2nd");
// })


// const cont = document.getElementById("container");
// cont.addEventListener("click", function(){
//     console.log("i am container");
// })

// const row = document.getElementById("row");
// row.addEventListener("click", function(){
//     console.log("i am row");
//     event.stopImmediatePropagation();
// })











// var items = document.getElementsByClassName("item");

// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
    
// }





// Adding new item to the list and removing it while clicking


// var add = document.getElementById("addNew");
// add.addEventListener('click', function(event){
//     var parent = document.getElementById("list");
//     var newItem = document.createElement('h3');

//     newItem.innerText = "Brand new item";
//     parent.appendChild(newItem);

// })



// var list = document.getElementById("list");

// list.addEventListener('click', function(event){
    
//     event.target.parentNode.removeChild(event.target);
// })








// =========  pioneer bank development  ========


// login Button Event Handler

let loginbtn = document.getElementById("login");

loginbtn.addEventListener("click", function(){
    let loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    let formarea = document.getElementById("form_area");
    formarea.style.backgroundColor = "#fff";

    let second = document.getElementById('second');
    second.style.display = "block";
})

// Deposit Button Event Handler

const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function(){
    
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanNumber("currentDeposit",depositNumber);
    updateSpanNumber("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// Withdraw Button Event Handler

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function(){

    const WithdrawNumber = getInputNumber("WithdrawAmount");

    updateSpanNumber("currentWithdraw", WithdrawNumber);
    updateSpanNumber("currentBalance", -1 * WithdrawNumber);

    document.getElementById("WithdrawAmount").value = "";
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}


function updateSpanNumber (id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}



// ///////////////////////////////////////////

let temp = prompt("please enter your number");
const result = 9/5*temp + 32;

alert("f : " + result + " degree");


