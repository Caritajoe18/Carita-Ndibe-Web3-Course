function flattenArrays(arrays) {
    return arrays.reduce(function (accumulator, currentArray) {
        // Merge (concatenate) the current array into the accumulator
        let merged = accumulator.concat(currentArray);

        return merged;
    }, []); // Start with an empty array as the accumulator
}
let arrays = [[1, 2, 3], [4, 5], [6]];
let flat = flattenArrays(arrays);

console.log(flat);

function looping(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }

  looping(3, n => n > 0, n => n - 1, console.log);

  function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));

  console.log(every([2, 4, 16], n => n < 10));


  