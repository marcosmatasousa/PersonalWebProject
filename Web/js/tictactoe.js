// Starting variables of the game
table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var show_turn = document.getElementById('turn');
turn = 'X';
show_turn.innerHTML = `It's ${turn} turn`;
document.getElementById('X.score').innerHTML = 0;
document.getElementById('O.score').innerHTML = 0;

// Function responsible for updating the game
function makePlay(x, y){
    if(table[x][y] === 0){
        table[x][y] = turn;
        document.getElementById(`[${x}, ${y}]`).innerHTML = turn;
    }
    if(!checkStatus()){
        if(turn === 'X'){
            turn = 'O';
        }
        else{
            turn = 'X';
        }
        show_turn.innerHTML = `It's ${turn} turn`;
    }
    else{
        updateScore()
        clearBoard()
    }
}

// Updates the score of the game
function updateScore(){
    var aux = document.getElementById(`${turn}.score`).innerHTML;
    document.getElementById(`${turn}.score`).innerHTML = parseInt(aux) + 1;
}

// Clears the board of the game
function clearBoard(){
    table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    if(turn === 'X'){
        turn = 'O';
    }
    else{
        turn = 'X';
    }
    show_turn.innerHTML = `It's ${turn} turn`;

    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table[i].length; j++) {
            document.getElementById(`[${i}, ${j}]`).innerHTML = "";
        }
    }
}

function checkStatus(){
    // Checking every row
    for(let i = 0; i < table.length; i++){
        var row = table[i];
        if (allEqual(row)){
            show_turn.innerHTML = `${turn} won!`;
            return true;
        }
    }

    // Checking every column
    for(let i = 0; i < table.length; i++){
        var column = [table[0][i], table[1][i], table[2][i]];
        if (allEqual(column)){
            show_turn.innerHTML = `${turn} won!`;
            return true;
        }
    }

    // Checking the diagonals
    var diag1 = [table[0][0], table[1][1], table[2][2]];
    var diag2 = [table[0][2], table[1][1], table[2][0]];
    if (allEqual(diag1) || allEqual(diag2)){
        show_turn.innerHTML = `${turn} won!`;
        return true;
    }
    return false;
}

// Verifies if every item on a row are the same
function allEqual(row){
    return row.every(function(element) {
        return element === row[0] && row[0] !== 0;
    })
}
