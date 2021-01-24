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
