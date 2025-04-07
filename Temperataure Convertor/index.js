const textbox=document.getElementById("text");
const tofe=document.getElementById("tofe");
const toce=document.getElementById("toce");
const result=document.getElementById("result");
let temp;


function convert(){

    if (tofe.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F";
    }
    else if(toce.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°c";
    }

    else{
        result.textContent="select a unit to convert";
    }
}