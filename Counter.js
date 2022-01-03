//Increment Function and Here '+' means gives integer value
function Increment(){
    let count=+document.getElementById("lbl_Count").innerText;
    count++;
    document.getElementById("lbl_Count").innerText=count;
}


//Decrement Function and Here '+' means gives integer value
function Decrement(){
    let count=+document.getElementById("lbl_Count").innerText;
    count--;
    if(count===-1){
        alert("Zero is minimum value");
    }
    else{
        document.getElementById("lbl_Count").innerText=count;
    }
    
}