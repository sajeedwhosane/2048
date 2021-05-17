let splitRowArray=splitIntoRows();

/*
function that takes a solved Array and makes changes to the Grid/ Board.
*/
function display(arr,direction){
    //get all the cells
       let positions= document.querySelectorAll(".cell");
    if(direction == "left"){
        var newArr= [];
        
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                newArr.push(arr[i][j]);
            }
        }
        
        for(let i=0;i<newArr.length;i++){
                if(newArr[i]==0){
                    positions[i].innerHTML="";
                }else{
                    positions[i].innerHTML=newArr[i];
            
                }
                
        }
    }

}
display(splitRowArray,"left");
console.log(splitRowArray);

function slideLeft(arr){
    arr=arr.filter(isNotEmpty);
     let missingL=4-arr.length;
     let missingArr=Array(missingL).fill(0);
     newArr=arr.concat(missingArr);
    return newArr;
}

/*
helper function for that is called in mer
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
display(arrComplete,"left");
console.log(arrComplete);
/*
for(let i=0;i<slidRow.length;i++){
    combinedRow[i]=combineLeft(slidRow[i]);
}
*/
}    