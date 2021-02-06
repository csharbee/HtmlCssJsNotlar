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
const newArr= [4,5, ...arr]; // Spread operator. Sadece function parametresi olarak ya da arraylarde kullanılır.
// newArr= [4,5,1,2,3]; 

const [a,b,...c] =[1,2,3,4,5]; // a=1, b=2, c=[3,4,5]

console.log(3 || 'test'); // 3 (first truthy value is 3)
console.log('' || 'test'); // test
console.log(undefined || null); // null


console.log(3 && 'test'); // test (last truthy value)
console.log('' && 'test'); // '' (first falsy valeu )
console.log(undefined && null); // undefined


const teams= ["GS","FB","BJK","GS","TS","GS","FB"];
const uniqueTeams= new Set(teams);
uniqueTeams.add("GB");
uniqueTeams.delete("GB");
uniqueTeams.has("GS");
uniqueTeams.clear();


const maskCreditCard= function(number){
  const strNumber= number+''; // to string
  const lastFourDigit= strNumber.slice(-4);
  return lastFourDigit.padStart(strNumber.length,'*');
}

