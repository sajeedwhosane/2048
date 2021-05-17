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
    return splitRowArray;
    
}
splitIntoRows();

function splitIntoCols(){
    let arr= getCellValues();
    let index=[
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15]
    ];
    
    let splitColArray=[[],[],[],[]];   
    
    for(let i=0;i<4;i++){
        for(let j=0;j<index[i].length;j++){
            let ind=index[i][j];
            splitColArray[i].push(arr[ind]);
        }
    }
return splitColArray;
}

console.log(splitIntoCols());
/*
function to check for empty values in the grid.
*/

function getEmptyCells(){
    let x=document.querySelectorAll(".cell");
    let emptyCells=[];
    for(let i=0;i<x.length;i++){
        if(x[i].innerText ==""){
            emptyCells.push(x[i].id);
        }
    }
    return(emptyCells);
}

function isNotEmpty(value){
    return value !==0;
}

function isEmpty(value){
    return value ==0;
}