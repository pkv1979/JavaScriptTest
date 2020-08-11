// Задание №1
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(`Сумма чисел от 1 до ${n} равняется ${sum}`);
};

console.log("Задание 1");
sumTo(5);

// Задание №2
// Как исправить код ниже, чтобы он вывел в консоль 5 разных значений (от 0 до 4):
// for (var i = 0; i < 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, 1000);
// }
console.log("Задание 2");
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Задание №3
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее развернутой в обратную сторону. Например:
// Дано: Ира
// Вернет: арИ

// решается через спит, джоин, реверс 
const reverseStr = (str) => {
  let strToArr = str.split("");
  let outStr = strToArr.reverse();
  outStr = outStr.join("");

  return outStr;
};

console.log("Задание 3");
console.log(reverseStr("Константин"));

// Задание 4.
// Напишите функцию, которая принимает два аргумента и возвращает их сумму. Функция должна работать двумя способами: mul(x, y), mul(x)(y).
// ваще не понял, что тут. решается не так
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

console.log("Задание 4");
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

console.log("Задание 5");
console.log(isPalindrome("topot"));
console.log(isPalindrome("topop"));

// Задание №6
// Напишите функцию, которая принимает два аргумента и проверяет, является ли одно слово анаграммой другого.Пример:
// isAnagram(“finder”, “Friend”) == true;
// isAnagram(“friend”, “find”) == false;

// решается через sort
const isAnagram = (str1, str2) => {
  str1 = str1.toLowerCase();
  let str1ToArr = str1.split("");
  str1ToArr.sort();
  let outStr1 = str1ToArr.join("");

  str2 = str2.toLowerCase();
  let str2ToArr = str2.split("");
  str2ToArr.sort();
  let outStr2 = str2ToArr.join("");

  if (outStr1 === outStr2) {
    return true;
  } else {
    return false;
  }
};

console.log("Задание 6");
console.log(isAnagram("finder", "Friend"));
console.log(isAnagram("friend", "find"));

// Задание №7
// Напишите функцию, которая возвращает число из последовательности фибоначи по его порядковому номеру.Пример:
// fibonacci(4) == 3;
// fibonacci(3) == 2;
const fibonacci = (num) => {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};

console.log("Задание 7");
console.log(fibonacci(4));
console.log(fibonacci(3));
console.log("----------");

// Почитай про кодстайл и встроенные функции работы с массивами и строками
