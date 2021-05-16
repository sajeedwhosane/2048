document.addEventListener('keydown', logKey);
/* 
function to log the key
*/
function logKey(e) {
//  console.log(e.code);
let a = checkEmptyCells();
if(a=='board_full'){
    console.log("Game Over");
}else{
    // merge the cells.
    // then check the empty cells.
    // randomly add a value to the empty cell. 
    // randomly add a value 2 to the cell.
    console.log("empty");
}
// check if there are empty cells.b
//if no empty cells then game over.
// else randomly add a value to the cell
let key=e.code;
switch(key){
  case 'ArrowUp': case 'KeyW':
  //console.log("up");
  //merge
  // checkemptycells
  // then add a value if cells empty
  break;

  case 'ArrowDown': case 'KeyS':
  //console.log("Down");
  break;
  
  case 'ArrowLeft': case "KeyA":
  //console.log("left");
  break;

  case 'ArrowRight': case 'KeyD':
  //console.log("right");
  break;
}

}
console.log("hey");


let newGameBtn=document.getElementById("new_game_btn");
newGameBtn.addEventListener('click',emptyAllCells);
/*
function to check for empty values in the grid.
*/

function getEmptyCells(){
    let x=document.querySelectorAll(".cell");
    console.log(x.length);
    console.log(x[0]);
    console.log(x[0].innerText);
    let emptyCells=[];
    for(let i=0;i<x.length;i++){
        if(x[i].innerText ==""){
            console.log(x[i].id);
            emptyCells.push(x[i].id);
        }
    }
    return(emptyCells);
}

function checkEmptyCells(){
    let a =getEmptyCells();
    if(a.length<1){
        // no empty cells.
        return 'board_full';
    }else{
        return a;
    }
}

function addRandomValues(x){
    switch(x){
        case 1:
            //check if there are any empty cells
            //if yes
            //then add value to a random empty cell
            //else  if no empty cells
            // game over.

        break;
        
        case 2: 
        // this is sent as an argument when new game button is clicked.
        // empty all the cells
        //then randomly add values to 2 cells.
        break;

    }
}

function emptyAllCells(){
    let x=document.querySelectorAll(".cell");
    for(let i=0;i<x.length;i++){
        x[i].innerText="";
    }
}