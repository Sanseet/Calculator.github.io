let result=document.getElementById("output");
function display(num){
    result.value +=num;
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value="Invalid";
    }
}

function clr(){
   result.value="";
}

function del(){
    result.value = result.value.slice(0,-1);
}