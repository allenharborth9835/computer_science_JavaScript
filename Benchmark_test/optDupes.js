const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const optimizedDuplicates = (arr) =>{
  //create empty object map
  const map = {};

  //loop over array
  for(i=0; i<arr.length; i++){
    const value = arr[i];
    //if array[i] not in map
    if(map[value] === undefined){
      //create new key/value pair on map = 1
      map[value] = 1;
    }
    else{
      //increment key/value pair by 1
      map[value]++
    }
  }
  //create variable for most appearing value
  let mostValue;
  //create variable for most appearing count
  let mostCount = 0;

  //loop over object keys/values
  for(const value in map){
    //if value > current most appearing count
    if(map[value]>mostCount){
      //update "most" variables to match
      mostCount = map[value];
      mostValue = value;
    }
  }
  //return most appearing value and count
  return `${mostValue} appeared ${mostCount} times.`;
}

module.exports = {optimizedDuplicates}