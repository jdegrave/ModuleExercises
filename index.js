
var ch = require('./module');


function listPosition (arr) {
  for (var i = 0; i < arr.length; i++) {
    var numarr = ch(arr, arr[i]);
    console.log(arr[i] + ': ' + numarr);
  }
}

listPosition([62, 89, 56, 45, 12, 91, 81]);
