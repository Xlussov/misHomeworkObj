//! task 1
const car = {
   name: undefined,
   model: 'x5',
   price: null,
   go: 34000,
}

function testForN(obj){
   let clear = []
   const obj1 = Object.entries(obj)
   obj1.forEach((item) => item[1] === undefined ? clear.push(item) : item[1] === null ? clear.push(item) : 0)
   clear = Object.fromEntries(clear)
   Object.keys(clear).length === 0 ? console.log('Null або undefined немає') : console.log(clear);
}

testForN(car)

//! task 2
const obj = {}
function test(obj) {
   Object.keys(obj).length === 0 ? console.log('Порожній елемент') : console.log('Щось є');
}
test(obj)

//! task 3
const cars = [
   {name: 'BMW', cost: 50000},
   {name: 'MB', cost: 32500},
   {name: 'SAAB', cost: 34600},
   {name: 'Rolls&Royse', cost: 345000},
   {name: 'Audi', cost: 34500},
   {name: 'MAN', cost: 34000},
   {name: 'Mazda', cost: 45000},
]

//? in value you must write forMin or forMax
function sort(arr, value) {
   if(value === 'forMin'){
      console.log(arr.sort((a,b) => a.cost - b.cost));
   }else if(value === 'forMax'){
      console.log(arr.sort((a,b) => b.cost - a.cost));
   }
}
sort(cars,'forMax')