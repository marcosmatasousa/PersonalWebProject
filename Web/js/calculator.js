display = document.getElementById("display");
numbers = [];
aux = "";


function calculate(){
    var flag = "";
    var currentValue = 0;
    if(typeof numbers[0] == 'number'){
        currentValue += numbers[0]
    }
    for(let i = 1; i <= numbers.length - 1; i++){
        if(typeof numbers[i] === 'string'){
            flag = numbers[i]
        }
        else{
            if (flag === '+'){
                currentValue += numbers[i];
            }
            else if (flag === '-'){
                currentValue -= numbers[i];
            }
            else if (flag === '*'){
                currentValue *= numbers[i];
            }
            else{
                currentValue /= numbers[i]
            }
        }
    }
    display.innerHTML = currentValue;
    numbers = [];
    aux = currentValue;
}

function updateDisplay(item){
    if (item === '='){
        numbers.push(parseInt(aux));
        aux = "";
        calculate();
    }
    else{
        if (typeof item == 'string' && item != '.'){
            if (aux.includes('.')){
                numbers.push(parseFloat(aux));
            }
            else{
                numbers.push(parseInt(aux));
            }
            numbers.push(item);
            aux = "";
        }
        else{
            aux += item;
        }
        
        display.innerHTML += item;
    }
}

function C(){
    numbers = [];
    aux = "";
    display.innerHTML = "";
}

function CE(){
    display.innerHTML = display.innerHTML.slice(0, -1);
    aux = display.innerHTML;
}