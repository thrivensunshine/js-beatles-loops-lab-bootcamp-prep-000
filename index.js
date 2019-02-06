
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
let exla = ''
let finArr = []
var i = 0;
while(arr.length- 2 >= i) {
  console.log(i + "  <-- 1" )
  console.log(arr[i])
  i++
  fin = arr[i]
  exla = "!!!"
  
  finArr.push(fin + exla)
  finArr.push(arr[0]+"!!!")
  //finArr.pop()
console.log(finArr);

}return finArr
  }
  
  
  function iLoveTheBeatles(num){
  let finArr = [];
  //let i = 0
  let text = "I love the Beatles"
  
  do{
    num++
    finArr.push(text)
  }while(num <= 15 );
  return finArr
}