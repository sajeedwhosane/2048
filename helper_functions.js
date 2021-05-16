function checkEmptyCells(){
    let a =getEmptyCells();
    if(a.length<1){
        // no empty cells.
        return 'board_full';
    }else{
        return a;
    }
}
/*
function to empty all cells
*/
function emptyAllCells(){
    let x=document.querySelectorAll(".cell");
    for(let i=0;i<x.length;i++){
        x[i].innerText="";
    }
}

/*
function to randomly add values is used during the game and when a new board is created.
*/
function addRandomValues(arr,n){
   let max=arr.length-1;
   let min=0;
      for(let i=0;i<n;i++){
    let rV=  Math.floor(Math.random() * (max));
    console.log(arr[rV]);
    document.getElementById(arr[rV]).innerText=2;
   }
     
}

/*
function to get the values of the cell
*/
function getCellValues(){
let arr=[];
let arr1=[];
 arr=document.querySelectorAll(".cell");
for(let i=0;i<arr.length;i++){
    arr1.push(arr[i].innerText);
}
return arr1;
}


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
