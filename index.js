// function GetClassNameEditor(){
//     let cssClass = '';

//     return(className = 'test-case',shouldAddClass) =>{
//         if(!className &&  !shouldAddClass){
//             return cssClass.trim();
//         if(!cssClass.includes(className)){
//             cssClass+=`${className}`;
//             return className.trim();
//         } else{
//             return className.trim();
//         }
//     }
// }
// }

    
// const ClassNameEditor = GetClassNameEditor();//

// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   } else if (str[0] === str[str.length - 1]) {
//     return isPalindrome(str.slice(1, -1));
//   } else {
//     return false;
//   }
// }

// let inputStr = prompt('Введите строку для проверки на палиндром:');
// if (isPalindrome(inputStr)) {
//   console.log(`Строка "${inputStr}" является палиндромом.`);
// } else {
//   console.log(`Строка "${inputStr}" не является палиндромом.`);
// }



// 1. Функция sumOfDigits(num):
// 2.     Если num < 10:
// 3.         Вернуть num
// 4.     Иначе:
// 5.         lastDigit = num % 10
// 6.         remainingDigits = целая часть от деления num на 10
// 7.         Вернуть lastDigit + sumOfDigits(remainingDigits)

// 8. num = ввести натуральное число
// 9. sum = вызвать функцию sumOfDigits(num)
// 10. Вывести "Сумма цифр числа ", num, " равна ", sum


// const n = parseInt(prompt("Введите натуральное число:"));
// const bin_n = n.toString(2); // бинарное представление числа
// if (bin_n.split('1').length - 1 === 1) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }





                                                                      //1.

// const numbers = [8, 86, 23, 46, 57, 8, 79, 32, 56, 66];

// function filterEvenTwoDigitNumbers(number) {
//   return number >= 10 && number <= 99 && number % 2 === 0;
// }
// const evenTwoDigitNumbers = numbers.filter(filterEvenTwoDigitNumbers);

// console.log(evenTwoDigitNumbers);


//                                                                        //2.

// const values = Array.from({ length: 10 }, (_, i) => prompt(`Введите значение ${i + 1}:`));
// const allNumbers = values.every(value => !isNaN(value));
// console.log(allNumbers);

// const arr = [
//   {a: 4, b: 1},
//   {a: 3, b: 2},
//   {a: 85, b: 5}
// ]
//                                                                         //3
// if (arr.every(item => item.a > item.b)) {
//   console.log('its valid');
// } else {
//   console.log('its invalid');
// }

// const newArr = arr.map((item) => {
//   return {
//     a: item.a,
//     b: item.b ** 2
//   };
// });

// console.log(newArr);




//Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

// function toggleMe() {
//   toggleMe.lastState = !toggleMe.lastState;
//   //  return Math.random() > 0.5; // это я просто хотел написать так,но потом посмотрел условия)
//    return toggleMe.lastState
   
// }
// toggleMe.lastState = false

// console.log(toggleMe()); 
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());

/*/Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). 
//Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.//

// const counter = (() => {
//   let count;

//   return (num) =>
//     num === undefined
//       ? (count = count === undefined ? 1 : count + 1)
//       : () => ++count;
// })();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter());

// const countFrom = counter(5); 
// console.log(countFrom()); // 6
// console.log(countFrom()); // 7
// console.log(countFrom()); // 8



//Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

// const arr  = [
//   [14, 75, 10, 28],
//   [92, 35, 84],
//   [49, 76, 60, 45],
//   [4, 39, 82],
//   [53, 12, 33, 73],
//   [65, 16],
//   [83, 5, 48],
//   [99, 47, 18, 40]
// ]

// const calculsum = arr.reduce((acc, cur) => {
//   const curSum = cur.reduce((a, b) => a + b, 0);
//   const accSum = acc.reduce((a, b) => a + b, 0);

//   return curSum > accSum ? cur : acc;
// }, []);
// ;

// console.log(calculsum);






// Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

// const myFuncNames = [1,1,1,4,4,5,1,6,6,74,74,74,3]


// const filteredArr = myFuncNames.filter(num => num % 2 === 0 && num >= 10 && num <= 99);

// console.log(filteredArr);


function mergeSort(arr) {
   if (arr.length === 1) {
       return arr;
   }
   let mid = Math.floor(arr.length / 2);
   let leftArr = arr.slice(0, mid);
   let rightArr = arr.slice(mid);
   return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
   let result = [];
   let leftIndex = 0;
   let rightIndex = 0;
   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
       if (leftArr[leftIndex] < rightArr[rightIndex]) {
           result.push(leftArr[leftIndex]);
           leftIndex++;
       } else {
           result.push(rightArr[rightIndex]);
           rightIndex++;
       }
   }
   return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([15, 21, 13, 5, 10, 7]));


*/

// const fruits = [
//     {model: 'apple', weight: 2},
//     {model: 'pineapple', weight: 1},
//     {model: 'orange', weight:3},
//     {model: 'pear', weight:100},
//     {model: 'banana', weight: 10}
// ];
// // напшите ка программку в которой
// // раз в секунду мы будем кушать каждый фрукт
// // для этого нужно воспользоваться функцией eat

// function eat () {
//     console.log(`We eat ${this.model} ${this.weight} kilos`);
    
// }

// fruits.forEach((fruits,index) =>{
    
   
// })

// const fbTeam = [
//      {
//      playerName:"Messi",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Suarez",
//      team:"Barcelona"
//      },
//      {
//      playerName:"Ronaldo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Buffon",
//      team:"Juventus"
//      },
//      {
//      playerName: 'Valerchik',
//      team: 'Vedrich97'
//      },
//      {
//      playerName:"Gonsalo",
//      team:"Juventus"
//      },
//      {
//      playerName:"Pedro",
//      team:"Chelsea"
//      },
//     {
//      playerName:"Zuma",
//      team:"Chelsea"
//      },
//      {
//      playerName:"Rico",
//      team:"PSG"
//      }
//  ];

// const fbPlayersByTeams = fbTeam.reduce((otvet, player) => {

//         if (!answer[player.team]) { // если поле НЕ существует
//             // создать поле (должен быть массив)
//             answer[player.team] = [];
//         } 
          
//         // добавить в массив игрока
//         answer[player.team].push(player);
    
//         return answer;
//     }, {}); 
    
//     console.log(fbPlayersByTeams);
    // 



/* ИЗМЕНЕИЕ ИМЯ И ФАМИЛИИ */
// class Person{
//     constructor(userName,fullName,lastName){                     
//         this.firstName = userName;
//         this.lastName = lastName;
   
//     }
//     set fullName (val){
//         const arrName = val.split('');
//         this.firstName = arrName[0];
//         this.lastName = arrName[1];
//     }

//      get fullName() {
//        return this.firstName + '' + this.lastName;
    
//      }
// }

// const user = new Person ('Alex','Jonni')
// user.lastName  = 'Bob Drogovnik';
// console.log(user.lastName);       











