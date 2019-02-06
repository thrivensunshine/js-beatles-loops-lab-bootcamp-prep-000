
function theBeatlesPlay(arrM, arrI){
let finArr= []
//console.log(arrI.length)
for(let i = 0; i < arrM.length; i++){
  for(let j = 0; j < arrI.length; j++){
    if(i === j){
      finArr.push(`${arrM[i]} plays ${arrI[j]}`)
    }
  }
}return finArr
}

function johnLennonFacts(arr)  {
  
let fin =''
let finArr = []
var i = 0;

  while(i < arr.length-1) {
  i++
  fin = arr[i] + "!!!"
  finArr.push(arr[0])
  finArr.push(fin)
  finArr.pop()

//console.log(finArr);

}return finArr
  }
