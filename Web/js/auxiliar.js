display = document.getElementById("display");
flag = "";
currentValue = 0;

function updateDisplay(item){
    if (typeof item == 'string'){
        if (item === '='){
            if (flag === '+'){
                display.innerHTML = currentValue + ;
            }
        }
        else if(item === '+'){
            flag = '+'
        }
        else if(item === '-'){
            flag = '-'
        }
        else if(item === '*'){
            flag = '*'
        }
        else if(item === '/'){
            flag = '/'
        }
    }
    else{
        display.innerHTML += item;
    }


}