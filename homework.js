// class Programmer {
//   constructor(name, stack) {
//     this.name = name;
//     this.stack = stack;
//   }

//   code() {
//     this.stack.forEach((language) => {
//       console.log(`${this.name} is coding on ${language}`);
//     });
//   }

//   toString() {
//     return `Hello my name is ${this.name}`;
//   }
// }


//   const progaramer = new Programmer('Oleg',['Python','PHP','Java']);
//     progaramer.code();




// class Line {
//   constructor(x1, y1, x2, y2) {
//     this.start = { x: x1, y: y1 };
//     this.end = { x: x2, y: y2 };
//   }

//   getLength() {
//     const dx = this.end.x - this.start.x;
//     const dy = this.end.y - this.start.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// } 

// // Создаем три линии
// const line1 = new Line(0, 0, 3, 4);
// const line2 = new Line(1, 1, 4, 4);
// const line3 = new Line(0, 0, 8, 1);

// // Вычисляем длины линий
// const length1 = line1.getLength();
// const length2 = line2.getLength();
// const length3 = line3.getLength();

// // Проверяем, могут ли три линии сформировать треугольник
// const canFormTriangle = length1 < length2 + length3 &&
//                         length2 < length1 + length3 &&
//                         length3 < length1 + length2;

// console.log(`Длина первой линии: ${length1}`);
// console.log(`Длина второй линии: ${length2}`);
// console.log(`Длина третьей линии: ${length3}`);
// console.log(`Могут ли три линии сформировать треугольник? ${canFormTriangle}`);

// class Timer {
//   constructor() {
//     this.IntervalId = null;
//     this.timer = 0;
//   }

//   start() {
//     this.IntervalId= setInterval(() => {
//       console.log(++this.timer)
//     }, 1000);
//   }

//     stop() {
//       clearInterval(this.IntervalId );
//     }


//     reset() {
//     this.timer = 0 
//   }
// }

//   const timer = new Timer();

// // Запускаем таймеры и останавливаем через некоторое время
// timer.start();
// setTimeout((  ) => {
//   timer.reset();
// },5000); 

// setTimeout(() =>{
//   timer.stop();
// },10000); 











// class Timer {
//   constructor() {
//     this.startTime = null;
//     this.elapsedTime = 0;
//     this.timerId = null;
//   }

//   start() {
//     if (this.timerId) {
//       return;
//     }

//     this.startTime = Date.now();
//     this.timerId = setInterval(() => {
//       this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
//       console.log(this.elapsedTime);
//     }, 1000);
//   }

//   stop() {
//     if (this.timerId) {
//       clearInterval(this.timerId);
//       this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
//       console.log(this.elapsedTime);
//     }
//   }

//   reset() {
//     if (this.timerId) {
//       clearInterval(this.timerId);
//     }
//     console.log(this.elapsedTime);
//   }
// }

// Создаем несколько таймеров
// const timer1 = new Timer();
// // const timer2 = new Timer();
// // const timer3 = new Timer();

// // Запускаем таймеры и останавливаем через некоторое время
// timer1.start();

// setTimeout(() => 
// timer1.stop(), 5000);

// timer2.start();
// setTimeout(() => timer2.stop(), 3000);

// timer3.start();
// setTimeout(() => timer3.stop(), 8000);



// class Car{
//   constructor(model,color,price){
//     this.model = model;
//     this.color = color;
//     this.price = price;
//   }
//   run() {
//     console.log(`${this.model} ${this.color} is running`);
//   }
// }

// // Создаем объекты класса Car
// const HondaCar = new Car('Honda', 'braun', 20000);
// const ToyonaCar = new Car('Toyota', 'blue', 25000);

// // Вызываем метод run()
// HondaCar.run(); // выводит "Honda red is running"
// ToyonaCar.run(); // выводит "Toyota blue is running"




// function  Book(author, bookName, pageAmount) {
//   this.author = author;
//   this.bookName = bookName;
//   this.pageAmount = pageAmount;
// }

// const books = [
//   new Book('George Orwell', '1984', 328),
//   new Book('Ray Bradbury', 'Fahrenheit 451', 249),
//   new Book('Aldous Huxley', 'Brave New World', 311),
//   new Book('Margaret Atwood', 'The Handmaid\'s Tale', 311),
//   new Book('Kurt Vonnegut', 'Slaughterhouse-Five', 215),
//   new Book('Philip K. Dick', 'Do Androids Dream of Electric Sheep?', 210),
//   new Book('Anthony Burgess', 'A Clockwork Orange', 192),
//   new Book('William Golding', 'Lord of the Flies', 224),
// ];

// function getBiggerBook(books) {
//   return books.reduce((acc, book) => {
//     return book.pageAmount > acc.pageAmount ? book : acc;
//   }, books[0]);
// }

// const biggerBook = getBiggerBook(books);
// console.log(biggerBook);

// class Programmer {
//   constructor(name, stack) {
//     this.name = name;
//     this.stack = stack;
//   }

//   getSeniorDeveloper() {
//     return this.stack.length > 4;
//   }
// }

// let programmers = [];
// let stacks = [
//   ["Python", "Java", "JavaScript", "Ruby", "C++"],
//   ["JavaScript", "PHP", "CSS", "HTML", "C#"],
//   ["Java", "Python", "C++", "C#", "Go"],
//   ["Ruby", "JavaScript", "Python", "Swift", "Rust"],
//   ["C++", "Java", "JavaScript", "PHP", "Python"],
// ];

// for (let i = 0; i < 10; i++) {
//   let name = `Valerchik ${i}`;
//   let stack = stacks[Math.floor(Math.random() * stacks.length)];
//   programmers.push(new Programmer(name, stack));
// }

// let seniorDevelopers = programmers.filter((p) => p.getSeniorDeveloper());
// console.log(seniorDevelopers);



// class Programmer {
//   constructor(userName, stack) {
//     this.userName = userName;
//     this.stack = stack;
//     Programmer.code = function () {
//       stack.forEach((element) => {
//         console.log(`${this.userName} is coding on ${element}`);
//       });
//       Programmer.toString = function prToString() {
//         console.log(`Hello my name is ${this.userName} `);
//       };
//     };
//   }
//   static getSeniorDeveloper(programmerTeam) {
//     return programmerTeam.filter((programmer) => {
//         return programmer.stack.length > 4;
//     });
//   }
// }


// const ProgrammerGroap= [
//     new Programmer("Vania", ["JS", "Python", "Go", "Ruby"]),
//     new Programmer("Vlad", ["Java", "PHP"]),
//     new Programmer("Olga", ["CSS", "HTMl"]),
//     new Programmer("Valia", ["Assembler", "JS", "C++", "C#", "XML"]),
//     new Programmer("Artem", ["C++", "C#"]),
//     new Programmer("Sergei", ["Go", "Ruby","CSS","C#"]),
//     new Programmer("Sergei", ["SQL", "Swift"]),
//     new Programmer("Anton", ["TypeScript", "React", "C+", "CSS", "HTML"]),
//     new Programmer("Roman", ["Delphi", "Scala"]),
//     new Programmer("Maksim", ["Kotlin", "Golang"]),
//   ];

// console.log(Programmer.getSeniorDeveloper(ProgrammerGroap));







