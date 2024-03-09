
var Number_of_moves = 0; 
var time = 0;

function swapTiles(cell1,cell2){
    var temp=document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffle(){
    //Use nested loops to access each cell of the 4x4 grid
    for(var row=1; row<=4; row++){ //for each row of the 4x4 grid
        for (var column=1; column<=4; column++){
            var row2 = Math.floor(Math.random() * 4+1); //pick a random row from 1 to 4 
            var column2 = Math.floor(Math.random() * 4+1); //pick a random column from 1 to 4
            swapTiles("cell" + row + column, "cell" + row2 + column2); 
        }
    }
    // reset the Number of moves and time to 0 if shuffled
    Number_of_moves = 0;
    document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
    
    time = 0;
    setInterval(()=> { 
        document.getElementById("time").innerHTML = "Time spent in the current game: "+ time + " seconds.";
    },1000);
}
var count = 0;
function reset(){
    if(document.getElementById("cell11").className!="tile1" || 
        document.getElementById("cell12").className!="tile2" ||
        document.getElementById("cell13").className!="tile3" ||
        document.getElementById("cell14").className!="tile4" ||
        document.getElementById("cell21").className!="tile5" ||
        document.getElementById("cell22").className!="tile6" ||
        document.getElementById("cell23").className!="tile7" ||
        document.getElementById("cell24").className!="tile8" ||
        document.getElementById("cell31").className!="tile9" ||
        document.getElementById("cell32").className!="tile10" ||
        document.getElementById("cell33").className!="tile11" ||
        document.getElementById("cell34").className!="tile12" ||
        document.getElementById("cell41").className!="tile13" ||
        document.getElementById("cell42").className!="tile14" ||
        document.getElementById("cell43").className!="tile15" ||
        document.getElementById("cell44").className!="tile16"){

            //reset tiles by assigning proper className to id
            for (var row =1; row<=4; row++){
                for(var column = 1; column <=4; column++){
                    count++;
                    document.getElementById("cell" + row + column).className = ("tile" + count); 
                }
            }     
        }
        count = 0;
}

function simple_game(){
        reset();

        Number_of_moves = 0;
        document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
    
        time = 0;
        setInterval(()=> { 
            document.getElementById("time").innerHTML = "Time spent in the current game: "+ time +" seconds.";
        },1000);
    
        swapTiles("cell43","cell44"); // swap two tiles
    
}

function clickTile(row, column){
    var cell = document.getElementById("cell"+ row + column);
    var tile = cell.className;
    
    if(tile != "tile16"){
        //check if the white tile is on the right
        if(column < 4){
            if(document.getElementById("cell" + row + (column + 1)).className == "tile16"){
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                //Every time a tile is moved increment by 1
                Number_of_moves++;
                document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
                setTimeout(() => {Window()}, 1000); //1000 is the delay the time
                return;
            }
        }

        //check if the white tile is on the left
        if(column > 1){
            if(document.getElementById("cell" + row + (column - 1)).className == "tile16"){
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                //Every time a tile is moved increment by 1
                Number_of_moves++;
                document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
                setTimeout(() => {Window()}, 1000); //1000 is the delay the time
                return;
            }
        }

        //check if the white tile is above
        if(row > 1){
            if(document.getElementById("cell" + (row -1) + column).className == "tile16"){
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                //Every time a tile is moved increment by 1
                Number_of_moves++;
                document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
                setTimeout(() => {Window()}, 1000); //1000 is the delay the time
                return;
            }
        }

        //check if the white tile is below
        if(row < 4){
            if(document.getElementById("cell" + (row + 1) + column).className == "tile16"){
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                //Every time a tile is moved increment by 1
                Number_of_moves++;
                document.getElementById("num_moves").innerHTML = "Number of moves thus far: "+ Number_of_moves;
                setTimeout(() => {Window()}, 1000); //1000 is the delay the time
                return;
            }
        }
    }
}

setInterval(()=> { 
    time++;
    document.getElementById("timer").innerHTML = "Time spent in the current game: "+ time + " seconds";
},1000);

function quit(){
    window.location.reload();
}
function Window(){
    if (document.getElementById("cell11").className=="tile1" && 
    document.getElementById("cell12").className=="tile2" &&
    document.getElementById("cell13").className=="tile3" &&
    document.getElementById("cell14").className=="tile4" &&
    document.getElementById("cell21").className=="tile5" &&
    document.getElementById("cell22").className=="tile6" &&
    document.getElementById("cell23").className=="tile7" &&
    document.getElementById("cell24").className=="tile8" &&
    document.getElementById("cell31").className=="tile9" &&
    document.getElementById("cell32").className=="tile10" &&
    document.getElementById("cell33").className=="tile11" &&
    document.getElementById("cell34").className=="tile12" &&
    document.getElementById("cell41").className=="tile13" &&
    document.getElementById("cell42").className=="tile14" &&
    document.getElementById("cell43").className=="tile15" &&
    document.getElementById("cell44").className=="tile16")
    {
        window.alert("Congratulations!!\n You've successfully reordered the puzzle numbers in sequential order! \n\n Time spent to complete: " + time + " second(s)" +
        "\n Number of moves it took to complete: " + Number_of_moves + "\n\n Would you like to play again?")
        window.location.reload(); // Reload page upon confirmation
    }
}
