const Benchmark = require('benchmark');
const {linearSearch, binarySearch} = require('./search');
const { bubbleSort } = require('./common_sort _algs/bubbleSort');
const { quickSort } = require('./common_sort _algs/quickSearch');
const { mostDuplicates } = require('./dupes');
const { optimizedDuplicates} = require('./optDupes')

const numbers = [];
for(let i = 1; i <= 4000000; i++){
  numbers.push(i);
}

const target = numbers[0];

const sortNumbers =[];
for (let i = 0; i < 40000; i++) {
  sortNumbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
    // .add('random test', function(){
    //   linearSearch(numbers, target)
    // })
    // .add('binary search', function(){
    //   binarySearch(number, target, 0, numbers.length-1)
    // })
    // .add('bubble sort', function(){
    //   const testArray = [...sortNumbers];

    //   bubbleSort(testArray);
    // })
    // .add('quick sort', function(){
    //   const testArray = [...sortNumbers];

    //   quickSort(testArray)
    // })
    // .add('js sort', function(){
    //   const testArray = [...sortNumbers];

    //   testArray.sort((a, b) =>{
    //     return a -b;
    //   })
    // })
    .add('duplicates test', function(){
      mostDuplicates(sortNumbers);
    })
    .add('opt test', function(){
      optimizedDuplicates(sortNumbers);
    })
    .on('complete', function(){
      this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();