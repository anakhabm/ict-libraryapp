var first=document.getElementById("input1");
var second=document.getElementById("input2");
var third=document.getElementById("input3");
var fourth=document.getElementById("input4");
var submit=document.getElementById("submit1");
function validate(){
    if(first.value==""){
        return false;
    }
    else if(second.value==""){
        return false;
    }
    else if(third.value==""){
        return false;
    }
    else if(fourth.value==""){
        return false;
    }
    else{
        alert("Author added successfully");
        return true;
    }
}