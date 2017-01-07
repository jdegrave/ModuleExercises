/*
  - Create a new project directory for today's Exercise
  - Make this directory a git repository
  - Create a new javascript file in the project directory
    - In this file:
       - Create a module that will take an array of numbers and a number. The
         numbers before and afte rthe first instance of the number in the array










*/


function checkPosition(arr, num) {
  var result = [];
  var numPos = arr.indexOf(num);


  if (numPos === 0){
    result.push(arr[arr.length - 1]),
    result.push(arr[numPos + 1]);

  } else if (numPos === arr.length - 1) {
    result.push(arr[numPos-1])
    result.push(arr[0]);

  } else {
    result.push(arr[numPos - 1]);
    result.push(arr[numPos + 1]);
  }

  return result;
}




module.exports = checkPosition;
