var ch = require('./module');
var arr = [62, 89, 56, 45, 12, 91, 81];
var result;

console.log('Test 1 - Middle Number');

result = ch(arr, 45);

if (result[0] === 56 && result[1] === 12) {
  console.log('Test passed.');
} else {
  console.log('Test failed');
}


console.log('Test 1 - First Number');
result = ch(arr, 62);
if (result[0] === 81 && result[1] === 89) {
  console.log('Test passed.');
} else {
  console.log('Test failed');
}

console.log('Test 1 - Last Number');
result = ch(arr, 81)
if (result[0] === 91 && result[1] === 62) {
  console.log('Test passed.');
} else {
  console.log('Test failed');
}
