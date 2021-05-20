let arr=getCellValues();

function scoreCalculate(arr){
    console.log(arr);
    let score=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=4){
            score+=arr[i];
        }
    }
    return score;
}
console.log(scoreCalculate(arr));