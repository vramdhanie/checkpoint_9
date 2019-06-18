function arrayEquals(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }

  return true;
}

function objectEquals(obj1, obj2) {
  if (!arrayEquals(Object.keys(obj1), Object.keys(obj2))) {
    return false;
  }
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) != obj2.hasOwnProperty(key)) {
      return false;
    } else if (typeof obj1[key] != typeof obj2[key]) {
      return false;
    } else if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}

function testForEach() {
  const numbers = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const expected = 15;
  let actual = 0;

  function forEachSum(a) {
    actual += a;
  }

  objectForEach(numbers, forEachSum);

  return actual == expected;
}

const drill_1 = document.getElementById('drill_1');
if (typeof objectForEach === 'function') {
  drill_1.innerHTML = `
   <div class="result">For Each: ${testForEach() ? 'Passed' : 'Failed'}</div>  
`;
} else {
  drill_1.innerHTML = "Write the function named 'objectForEach'";
}

const drill_2 = document.getElementById('drill_2');
if (typeof objectSum === 'function') {
  drill_2.innerHTML = `
   <div class="result">Total Cost: ${
     totalCost === 222513 ? 'Passed' : 'Failed'
   }</div>
`;
} else {
  drill_2.innerHTML = "Write the function named 'objectSum'";
}

function testObjectMap() {
  const input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const expected = { a: 2, b: 4, c: 6, d: 8, e: 10 };

  function double(a) {
    return a * 2;
  }

  const actual = objectMap(input, double);
  return objectEquals(expected, actual);
}
const drill_3 = document.getElementById('drill_3');
if (typeof objectMap === 'function') {
  drill_3.innerHTML = `
   <div class="result">Object Map: ${
     testObjectMap() ? 'Passed' : 'Failed'
   }</div>
`;
} else {
  drill_3.innerHTML = "Write the function named 'objectMap'";
}

const drill_4 = document.getElementById('drill_4');
if (typeof usToUk === 'function') {
  drill_4.innerHTML = `
   <div class="result">$1 === 0.79 Pounds: ${
     usToUk(1) === 0.79 ? 'Passed' : 'Failed'
   }</div>
   <div class="result">$10 === 7.9 Pounds: ${
     usToUk(10) === 7.9 ? 'Passed' : 'Failed'
   }</div>   
`;
} else {
  drill_4.innerHTML = "Write the function named 'usToUk'";
}
