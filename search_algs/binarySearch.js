const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    return binarySearch(arr, num, left, middle -1)
  }else{
    return binarySearch(arr, num, midl+1, right)
  }
};

console.log(binarySearch(data, 54, 0, data.length-1));