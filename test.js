'use strict';

const test = ['USA', 'Ukraine', 2, true, 'retry']
let someSet = new Set(test);
console.log(someSet);

const wethearObject = {
London: 17,
Odessa: 777,
Paris: 11
};
console.log(wethearObject);
console.log(Object.entries(wethearObject));

const wethearMap2 = new Map(Object.entries(wethearObject));
console.log(wethearMap2);
console.log(wethearMap2.size);

const wethearMap = new Map([
['London', 15],
['Odessa', 333],
['Ukraine', 1]
]);
console.log(wethearMap);

for (const [key, value] of wethearMap) {
    console.log(key);
    console.log(value);
};
console.log([...wethearMap]);
console.log([...wethearMap.keys()]);
console.log([...wethearMap.values()]);

for (const [key, value] of wethearMap) {
    console.log(key);
    console.log(value);
};

let array = new Map([...wethearMap].map(el => el.reverse()));
console.log(array);

