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

// Задание №3
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее развернутой в обратную сторону. Например:
// Дано: Ира
// Вернет: арИ
const reverseStr = (str) => {
  let strToArr = str.split("");
  let outStr = strToArr.reverse();
  outStr = outStr.join("");

  return outStr;
};

console.log(reverseStr("Константин"));

// Задание 4.
// Напишите функцию, которая принимает два аргумента и возвращает их сумму. Функция должна работать двумя способами: mul(x, y), mul(x)(y).
const mul = (x) => {
  let item = x;
  const innerMul = (y) => {
    item *= y;

    return innerMul;
  };

  innerMul.toString = () => {
    return item;
  };

  return innerMul;
};

console.log(mul(5, 6));
console.log(mul(5)(6));

// Задание №5
// Напишите функцию, которая проверит, является ли слово палиндромом.Пример:
// isPalindrome(“topot”) == true;
// isPalindrome(“topop”) == false;
const isPalindrome = (str) => {
  const str2 = reverseStr(str);

  if (str === str2) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("topot"));
console.log(isPalindrome("topop"));
