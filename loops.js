//return an array --
//adding 25 strings to the array
//  loop 25 times  --
//  create a string 25 times --
// add the string to the array --
// "I am 1 strange loop." or "I am ${i} strange loops."

function forLoop(array) {

  for (var i = 0; i < 25; i++) {
    // console.log('Hello');
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }

  return (array);
}

function whileLoop(n) {
  var countdown = n;
    while (countdown > 0) {
      console.log(--countdown);
    }
    return ('done');
}

// function maybeTrue() {
//   return Math.random() >= 0.5
// }

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
}
  do {
    (array.pop(1))
  } while (array.length > 0 && maybeTrue()); {
    return (array);
  }
}
//
//   do array.length > 0 && maybeTrue () {
//     return (array);
//   } while maybeTrue() {
//     return Math.random() >= 0.5;
//   }
//   // return (array);
// // }
