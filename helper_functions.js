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
    if(arr[i].innerText==""){
        arr1.push(0);
    }else{
    arr1.push(parseInt(arr[i].innerText));
    }
}
return arr1;
}



function splitIntoRows(){
    let arr =getCellValues();
    let splitRowArray=[];
    //split the array in 4 row arrays.
    for(let i=0;i<4;i++){
        splitRowArray[i]=arr.splice(0,4);
    }
    console.log(splitRowArray[3]);
    
}
splitIntoRows();
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
