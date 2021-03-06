document.addEventListener('keydown', logKey);
/* 
function called when the keyboard event is triggered.
*/
function logKey(e) {
let a = checkEmptyCells();
if(a=='board_full'){
       console.log("Game Over");
        return "game Over";
    }

let key=e.code;
switch(key){
  case 'ArrowUp': case 'KeyW':
    //MergenMove up
    mergeUp();
    addRandomValues(a,1);
    break;

  case 'ArrowDown': case 'KeyS':
    mergeDown();
    addRandomValues(a,1);
    break;
  
  case 'ArrowLeft': case "KeyA":
  //MergenMove left
    mergeLeft();
  addRandomValues(a,1);
  break;

  case 'ArrowRight': case 'KeyD':
  //MergenMove right
  mergeRight();
  addRandomValues(a,1);
  break;
}

}

/*
Populate a new board when the new game button is clicked.
*/

let newGameBtn=document.getElementById("new_game_btn");
newGameBtn.addEventListener('click',function(){
    emptyAllCells();
    let emptyCells=getEmptyCells();
    addRandomValues(emptyCells,2);
});

