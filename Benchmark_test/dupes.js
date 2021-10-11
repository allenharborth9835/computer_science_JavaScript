const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const mostDuplicates = arr =>{
  //create variable for most appearing value
  let value;
  //create variable for most appearing count
  let count = 0;
  //loop over array (i)
  for(i = 0; i<arr.length; i++){
    //start a counter for number of occurrences
    let counter = 0;
    //loop over array again (j)
      //compare indexes
      for(j =0; j<arr.length; j++){
        //if same, increase counter
        if(arr[i]===arr[j]){
          counter++;
        }
      }
    //if counter > current most appearing count
    //update "most" variables to match
    if (counter > count){
      count = counter;
      value = arr[i];
    }
  }
  //return most appearing value and count
  return `${value} appeared ${count} times.`;
}

module.exports = { mostDuplicates };
