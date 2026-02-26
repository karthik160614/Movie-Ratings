const name1=document.getElementById('name');
const password=document.getElementById("password");
const submit=document.getElementById("submit");
let x;
let y;
submit.onclick= function(){
    x=name1.value;
    y=password.value;
    if(x!="" && y=="karthik16"){
        window.location="../index.html";
    }else{
      document.getElementById("disp").textContent="Wrong password!";
    }
}
window.alert("Please enter password as karthik16 to continue");
