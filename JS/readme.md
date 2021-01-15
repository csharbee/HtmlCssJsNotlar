# JavaScript
Js' de value ya type atamış oluyoruz. Variable' a type atamıyoruz. 

#### Falsy Values:
Boolean(0) -> false

Boolean(undefined) -> false

Boolean('') -> false

## Function

#### Declare
```javascript
function Test(variable){
  console.log(variable);
}
Test("hello");
```
#### Expression
```javascript
const Test = function(variable){
  console.log(variable);
}
Test("hello");
```
### Function Expression ile Birlikte Object Tanımlama
```javascript
const huseyin={
    birthDate:1994,
    name:'Huseyin',
    lastName:'Simsek',
    hasDriverLicense:true,
    hobbies:['Swimming','Football'],
    age:function(){
        return 2021 - this.birthDate;
    },
    getSummary: function(){
        return `${this.name} ${this.lastName} is ${this.age()} year old. He is ${this.hasDriverLicense? 'a' :'no'} driver license`
    }
}
```
