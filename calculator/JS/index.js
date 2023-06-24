var input=document.querySelector(".inputBox");
var inputEq=document.querySelector(".inputEq");
var History=document.querySelector(".history-div");
var answer=[];
var equation=[];
function getVal(num)
{
    if(input.value==0)
        input.value = num;
    else
         input.value += num;
}

function getop(op)
{
    input.value += op;
}

function getAns()
{
    // console.log("Equation : ",input.value)
    // console.log("Answer : ",eval(input.value))
    answer.push(eval(input.value));
    // console.log(answer);
    
    equation.push(input.value+'=');
    // console.log(equation);
    
    inputEq.value=input.value+'='
    input.value=eval(input.value)
}

function clearVal()
{
    inputEq.value='';
    input.value=0;
}

function showHistory(){
    for(let i=0;i<answer.length;i++)
    {
        History.innerHTML+="<h6>"+equation[i]+"</h6><h4>"+answer[i]+"</h4>"
    }
}

function clrHistory()
{
    History.innerHTML='';
    answer=[];
    equation=[];
}