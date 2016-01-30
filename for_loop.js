// Write a for loop that increments a counter variable by 10 each time, and displays the value.
for (var i=0; i < 101  ; i+=10) {
  console.log(i);
};
// debugger;
// Write a for loop that divides a counter variable by 2 each time, and displays the value.
for (var j=100; j >1 ; j/=2) {
  console.log(j);
};

// Augment the loop to insert each new value into an array
// j will never get to 0, so must make condition j>1, NOT j>0......otherwise it keeps dividing
var practice = [];
for (var j=100; j >1 ; j=j/2) {
  practice.push(j);
};
console.log(practice);

// Write a loop that starts at 100 and decrements a variable by 1. If the number is even, add the number to the beginning of an array, else add it to the end of the array.
var practice2 = [];
for (var j=100; j >0 ; j-=1) 
{
  if(j%2===0){
  practice2.unshift(j);}
  else{
    practice2.push(j);  
  }  
}
console.log(practice2);