// Задание №1
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(`Сумма чисел от 1 до ${n} равняется ${sum}`);
};

sumTo(5);

// Задание №2
// Как исправить код ниже, чтобы он вывел в консоль 5 разных значений (от 0 до 4):
// for (var i = 0; i < 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, 1000);
// }
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
