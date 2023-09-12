function valueRandom(length) {
  const randomArr = [];

  for (let i = 0; i < length; i++) {
    randomArr.push(Math.floor(Math.random() * 50) + 1);
  }

  return randomArr;
}

function separate(arr) {
  const evenValue = [];
  const oddValue = [];

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % 2 === 0){
        evenValue.push(arr[i]);

    }else if( arr[i] % 2=== 1){
      oddValue.push(arr[i]);
    }
  }

  return[evenValue, oddValue];
}


 

let calculateGenap=(inputArr)=>{
  let minArr = inputArr[0];
  let maxArr = inputArr[0];

  for(let i= 0; i<inputArr.length; i++){
    if( inputArr[i]<minArr ){
       minArr = inputArr[i];
    }else if(inputArr[i]> maxArr ){
      maxArr = inputArr[i]
    
       }
  }

  let total = inputArr[0]
  for(let i = 0 ; i < inputArr.length; i++){
    total += inputArr[i]
  }

  const rataRata= total

  let result = rataRata / inputArr.length;

  return  {minArr, maxArr, total, result}

 

}
let calculateGanjil=(inputArr)=>{
  let minArrGanjil = inputArr[0];
  let maxArrGanjil = inputArr[0];

  for(let i= 0; i<inputArr.length; i++){
    if( inputArr[i]<minArrGanjil ){
       minArrGanjil = inputArr[i];
    }else if(inputArr[i]> maxArrGanjil ){
      maxArrGanjil = inputArr[i]
    
       }
  }

  let totalGanjil = inputArr[0]
  for(let i = 0 ; i < inputArr.length; i++){
    totalGanjil += inputArr[i]
  }

  const rataRata= total

  let resultGanjil = rataRata / inputArr.length;

  return  {minArrGanjil, maxArrGanjil, totalGanjil, resultGanjil}

 

}





const arr100 = valueRandom(100);
const [evenValue, oddValue] = separate(arr100);

let {minArr, maxArr, total, result}= calculateGenap(evenValue)
let {minArrGanjil, maxArrGanjil, totalGanjil, resultGanjil}= calculateGanjil(oddValue)








console.log(`ini adalah angka genap `,evenValue)
console.log(`ini adalah angka ganjil`,oddValue)
console.log(minArr);
console.log(maxArr);
console.log(total);
console.log(result);
console.log(minArrGanjil);
console.log(maxArrGanjil);
console.log(totalGanjil);
console.log(resultGanjil);



