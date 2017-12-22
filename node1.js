// function myFunction() {
//   var a = 6;
//   console.log("a value within MyFunction: " + a);
// }

// myFunction();

// console.log("a value outside MyFunction: " + a);

function countDown(count) {
  for (let i = count; i >= 0; i--) {
    setTimeout(function () {
      console.log(i);
    }, (count - i) * 1000);
  }
}

function countDown2(count){
  console.log(count);
  if(count > 0){
    setTimeout(function(){
      countDown2(count-1);
    }, 1000);
  }
}

countDown2(6);