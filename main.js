 //1 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(),
// //  вернет массив переданных в параметры чисел.
function getmass (a) {
    let mas = [];
     mas.push(a)
    return  function (b) {
        mas.push(b)
        return function (c) {
            mas.push(c)
            return function(d) {
            mas.push(d)        
                return function () {
                    console.log(mas)
                    return mas
                }
            }
        }
    }
}
 let m = getmass(2)
 m(3)(4)(5)()
// // 2 Пусть функция в замыкании хранит число 10. Сделайте так, 
// //  чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
function foo (n) {
    return function (a) {
        if (n == 0|| undefined) {
            return console.log("stop")
        }else
            return n = n -1 
    }
}
let prom = foo(10)
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
console.log (prom())
/////////////////////////////////////////////////
// 3 Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
//  а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
 function foot (n){
     return function() {
         return n=n-1
     }
      if ((foot) == 0) {
          return console.log ("все закончено")
      }
 }
 let num = foot(10)
 console.log(num() )
 console.log(num())
 console.log(num())
 console.log(num())
 console.log(num())
 console.log(num())
 console.log(num())
 console.log(num())
 console.log(num())
// 4 Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
function mar (obj) {
    for (let key in obj){
        if (typeof (obj[key]) == "number") {
            console.log (obj[key])
   }
        else if( typeof(obj[key]) == "object") {
            mar (obj[key])
   }
 }
}
mar(obj) 
// 6 Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например,
//  такой: ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'
let a = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
function numser(a) { 
    let b = '';
        for (var i = 0; i < a.length; i++) { 
            if ( typeof(w[i]) == "string") {
    b = b + w[i]
    }
            if(  typeof(a[i]) == "object") {
    b = b + num(a[i])
    }
  }
            return b
 }
let c = num (a)
console.log (c)
// 7  Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
//  (Использовать замыкание)
function getFun () {
    let t = 0
        return function () {
            t = t + 1;
        return t ** 2;   
}
}
let ber = getFun ()
console.log (ber())

// 8  Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
// - внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
// - если введенная строка совпадает с паролем и false – если не совпадает.
// - Пример выполнения функции:
//   ```javascript
//   let checkPassword = makePassword("somePassword"); //задаем пороль
//   checkPassword("password"); // возвращает false
//   checkPassword("somePassword");
function makePassword(somePassword) {
    return function (b){
        if (somePassword == b) {
            console.log ("true")
}
        else {
            console.log ("false")
    }
  }
}
let checkPassword = makePassword(1234);
checkPassword (1234);
checkPassword (4321);
//9 Напишите функцию на JavaScript, чтобы получить целые числа в диапазоне (x, y). 
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function getNums(a, b) {
    let res = [a+1];  
        if (a < b) {
            return res.concat(getNums(a + 1, b))     
        }else {
            return []
    }
} 
console.log(getNums(2,9))
