function twoSum(numArray, sum) {
  // returns every pair of numbers from 'numArray'
  // that add up to the 'sum'
  var pairs = [];
  var hashTable = [];

  for(var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if(hashTable.indexOf(counterpart) !== -1){
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum)
  }
  return pairs;
}

// twoSum([1,6,4,5,3,3], 7);
// => [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]

twoSum([40,11, 19, 17, -12], 28);
// => [ [ 17, 11 ], [ -12, 40 ] ]