//button effect here
const allBtn = document.getElementsByClassName('button');
for(const btn of allBtn){
    btn.addEventListener('mousedown',function(){
        btn.style.boxShadow ="none"; 
    })
    btn.addEventListener('mouseup',function(){
        btn.style.boxShadow ="0px 5px 8px black"; 
    })
}

//all selector collect
const valueDisplay = document.getElementById('display-1');
const numDisplay = document.getElementById('display-2');
const numValue = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.getElementById('equal');
const allClear = document.getElementById('all-clear');
const valueClear = document.getElementById('value-clear');

//all default value is here 
let value1 = '';
let value2='';
let result= null;
let lastOperator ='';
let haveDot = false;

//get all number here
for(const num of numValue){
    num.addEventListener('click',function(e){
    const number= e.target.innerText;
        if(number==="." && !haveDot){
            haveDot=true;
        }else if (number==="."&&haveDot==true){
            return;
        }
        if (value1.length<12){
            value1+=number;
            numDisplay.innerText=value1;
        }
        
    })
        
}


// set value 1 and value 2 
for (const sign of operation){
    sign.addEventListener('click',function(e){
        if(!value1 && !value2){
            return;
        }
        else if (value1 && !value2){
        haveDot=false;
        lastOperator = e.target.innerText;
        // lastOperator= operation;
        value2=value1;
        valueDisplay.innerText=value2 +" "+lastOperator+' ';
        value1='';
        numDisplay.innerText=0;
        }
        else if (!value1 &&value2){
            lastOperator= e.target.innerText;
            valueDisplay.innerText=value2 +" "+lastOperator+' ';
        }
        else if(value1&&value2&&lastOperator){
            mathoperation();
            lastOperator=e.target.innerText;
            value2=result;
            valueDisplay.innerText=value2 +" "+lastOperator+' ';
            value1='';
            numDisplay.innerText=0;
        }
        
    })
    
}
//math operation is here

function mathoperation(){
    if(lastOperator=='+'){
        result=parseFloat(value2)+parseFloat(value1);
    }else if(lastOperator=='-'){
        result=parseFloat(value2)-parseFloat(value1);
    }else if(lastOperator=='*'){
        result=parseFloat(value2)*parseFloat(value1);
    }else if(lastOperator=='/'){
        result=parseFloat(value2)/parseFloat(value1);
    }else if(lastOperator=='%'){
        result=(parseFloat(value2)*parseFloat(value1))/100;
    }else if(lastOperator=="="){

    }
}
//equal function here
equal.addEventListener('click',function(){
    if(value1&&value2){
        mathoperation();
        value2='';
        valueDisplay.innerText='0';
        numDisplay.innerText=result;
        value1=result;
    }else if(!value1&&value2){
        value1=value2;
        result=value1;
        numDisplay.innerText=result;
        value2='';
        valueDisplay.innerText='0';
    }
    
})
// all clear 
allClear.addEventListener('click',function(){
    valueDisplay.innerText= 0;
    numDisplay.innerText= 0;
    value1='';
    value2='';
    result=null;
})
// last value clear 
valueClear.addEventListener('click',function(){
    const length= value1.length;
    let value='';
    for(let num= 0; num<(length-1);num++){
        value+=value1[num];
    }
    value1=value;
    numDisplay.innerText=value1;
    if(value1==''){
        value1=0;
        numDisplay.innerText=value1;
    }
})