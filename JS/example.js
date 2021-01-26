const strangerThings = ['Dustin','Steve','Mike','Will','Eleven','Lucas','Max'];

strangerThings.unshift('Nancy'); // dizinin başına eleman ekler.
console.log(strangerThings);

strangerThings.shift(); // dizinin başından elemanı çıkartır.
console.log(strangerThings);

console.log(strangerThings.indexOf('Jonathan')); // return -1 çünkü dizide eleman yok

const add= function(a,b){
  const arg= arguments;
  return a+b;
}
add(2,5);  // arg= [2,5];

const arr= [1,2,3];
const newArr= [4,5, ...arr]; // Spread operator 
// newArr= [4,5,1,2,3]; 
