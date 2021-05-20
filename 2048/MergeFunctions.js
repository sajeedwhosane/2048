/*
=Left
*/


//function that takes a solved Array and makes changes to the Grid/ Board.

function display(arr,direction){
    //get all the cells
       let positions= document.querySelectorAll(".cell");

        var newArr= [];
        if(direction == "row"){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                newArr.push(arr[i][j]);
            }
        }
        
    }else{
           newArr=arr;
        }
    for(let i=0;i<newArr.length;i++){
                if(newArr[i]==0){
                    positions[i].innerHTML="";
                }else{
                    positions[i].innerHTML=newArr[i];
            
                }
                
        }
let score=scoreCalculate(newArr);
localStorage.setItem("score",score);
let scoreVal=localStorage.getItem("score");
let scoreEle=document.getElementById("score");
scoreEle.innerHTML=scoreVal;
}

function slideLeft(arr){
    arr=arr.filter(isNotEmpty);
     let missingL=4-arr.length;
     let missingArr=Array(missingL).fill(0);
     newArr=arr.concat(missingArr);
    return newArr;
}

/*
helper function for mergeLeft function
*/
function combineLeft(arr){
    for(let i=0;i<arr.length;i++){
        let a=arr[i];
        let b=arr[i+1];
    if(a==b){
        arr[i]=a+b;
        arr[i+1]=0;
        break;
    }
    }
    return arr;
}

/* 
function called when keydown event is triggerred
*/
function mergeLeft(){
let splitRowArray=splitIntoRows();
let slidRow=[];
let combinedRow=[];
let arrComplete=[];
for(let i=0;i<splitRowArray.length;i++){
slidRow[i]=slideLeft(splitRowArray[i]);
combinedRow[i]=combineLeft(slidRow[i]);
arrComplete[i]=slideLeft(combinedRow[i]);
}
display(arrComplete,"row");
}    


/*
=RIGHT
*/
function slideRight(arr){
    arr1=arr.filter(isEmpty);
    arr2=arr.filter(isNotEmpty);
    newArr=arr1.concat(arr2);
    return newArr;

}

function combineRight(arr){
    for(let i=arr.length-1;i>=0;i--){
        let a=arr[i];
        let b=arr[i-1];
    if(a==b){
        arr[i]=a+b;
        arr[i-1]=0;
        break;
    }
    }
    return arr;   
}
function mergeRight(){
    let splitRowArray=splitIntoRows();
    let slidRow=[];
    let combinedRow=[];
    let arrComplete=[];
 for(let i=0;i<splitRowArray.length;i++){
    slidRow[i]=slideRight(splitRowArray[i]);
    combinedRow[i]=combineRight(slidRow[i]);
    arrComplete[i]=slideRight(combinedRow[i]);
 }   
    display(arrComplete,"row");
}


/*
=UP
*/
function mergeUp(){
    let splitColArray=splitIntoCols();
    let slidCol=[];
    let combinedCol=[];
    let arrComplete1=[];let arrComplete=[];
    for(let i=0;i<splitColArray.length;i++){
        slidCol[i]=slideLeft(splitColArray[i]);
        combinedCol[i]=combineLeft(slidCol[i]);
        arrComplete1[i]=slideLeft(combinedCol[i]);
    }
    // flatten the 2-d array so that i
    for(let i=0;i<arrComplete1.length;i++){
        for(let j=0;j<arrComplete1[i].length;j++){
            arrComplete.push(arrComplete1[j][i]);
        }
    }
    console.log(arrComplete1);
    console.log(arrComplete);
    display(arrComplete);
}


function mergeDown(){
    let splitColArray=splitIntoCols();
    let slidCol=[];
    let combinedCol=[];
    let arrComplete1=[];let arrComplete=[];
    console.log(splitColArray);
    for(let i=0;i<splitColArray.length;i++){
        slidCol[i]=slideRight(splitColArray[i]);
        combinedCol[i]=combineRight(slidCol[i]);
        arrComplete1[i]=slideRight(combinedCol[i]);
    }
    for(let i=0;i<arrComplete1.length;i++){
        for(let j=0;j<arrComplete1[i].length;j++){
            arrComplete.push(arrComplete1[j][i]);
        }
    }

    console.log(arrComplete1);
    console.log(arrComplete);   
    display(arrComplete);
}
