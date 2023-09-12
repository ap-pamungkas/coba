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


 

let calculate=(inputArr)=>{
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





const arr100 = valueRandom(100);
const [evenValue, oddValue] = separate(arr100);

const {minArr, maxArr, total, result}= calculate(evenValue)






console.log(`ini adalah angka genap `,evenValue)
console.log(`ini adalah angka ganjil`,oddValue)
console.log(minArr);
console.log(maxArr);
console.log(total);
console.log(result);



