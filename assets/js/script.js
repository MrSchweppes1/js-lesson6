// let fruits = ['Лимон','Яблоко','Апельсин','Груша', 'Мандарин'];
// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// let fruits = ['Яблоко','Апельсин'];
// console.log(fruits);
// console.log(fruits.toString());

// let fruits = ['Яблоко','Апельсин'];
// // Добавить в конец массива грушу
// fruits.push('Груша','Мандарин')
// console.log(fruits);
// // Добавить в начало массива лимон
// console.log(fruits.unshift('Лимон'));
// console.log(fruits);
// // Удалить певрый элемент
// console.log('Мы удалили ' + fruits.shift());
// console.log(fruits);
// // Удалить последний элемент
// console.log('Мы удалили ' + fruits.pop());
// console.log(fruits);

// // Ищем грушу
//  console.log(fruits.indexOf('Груша'));// возвращает индекс
//  console.log(fruits.includes('Груша'));// возвращает true or false

let fruits = [
  {
    name: "Яблоко",
    count: 5,
  },
  {
    name: "Груша",
    count: 10,
  },
  {
    name: "Апельсин",
    count: 8,
  },
  {
    name: "Мандарин",
    count: 6,
  },
];

const pear = fruits.find((fruit) => {
  return fruit.name === "Груша";
});
console.log(pear.count);

const pearIndex = fruits.findIndex((fruit) => {
  return fruit.name === "Груша";
});
console.log(fruits[pearIndex].count);

// Создать массив в котором количество фруктов меньше 10

const newFruits = fruits.filter((fruit) => {
  return fruit.count < 10;
});
console.log(newFruits);

fruits = fruits.filter((fruit) => {
  fruit.count += 10;
  return fruit;
});
console.log(fruits);

fruits.forEach((fruit) => {
  console.log(`${fruit.name} осталось ${fruit.count} штук`);
});

let sum = 0;
let masNumber = [1, 2, -6, -8, 8, 6, 14, 12, 18, -10];
for (let i = 0; i < masNumber.length; i++) {
  if ((masNumber[i] % 2 == 0) && (masNumber[i] > 0)) {
    sum += masNumber[i];
  }
}
console.log(sum);


 