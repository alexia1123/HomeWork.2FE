// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема

// Создать класс TV который наследует от ShopItem
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменят

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособност


// class ShopItem {
//   #amount = 3;

//   constructor(itemName, price) {
//     this.itemName = itemName;
//     this.price = price;
//     this.isOnSale = false;
//   }

//   set amount(val) {
//     if (val < 0) {
//       throw new Error('amount cannot be under zero');
//     }

//     this.#amount = val;
//   }

//   get amount() {
//     return this.#amount;
//   }
// }

// class Clothes extends ShopItem {
//   #size;

//   constructor(size, material, color = "#fff", ...args) {
//     super(...args);
//     this.size = size;
//     this.material = material;
//     this.color = color;
//   }

//   get size() {
//     return this.#size;
//   }

//   set size(passedSize) {
//     const validSizes = ["S", "M", "L", "XL"];
//     const isSizeValid = validSizes.some(
//       (validSize) => validSize === passedSize.toUpperCase()
//     );

//     if (isSizeValid) {
//       this.#size = passedSize;
//     } else {
//       throw new Error(`size should be either 'S', 'M', 'L', 'XL'`);
//     }
//   }

//   static changeColor(cloth, color) {
//     cloth.color = color;
//   }
// }

// const maika = new Clothes("XL", "raps", "orange", "maika", 200);

// class TV extends ShopItem {
//   #diagonal;
//   #withSmartTV;

//   constructor(diagonal, withSmartTV, ...args) {
//     super(...args);
//     this.#diagonal = diagonal;
//     this.#withSmartTV = withSmartTV;
//   }

//   get diagonal() {
//     return this.#diagonal;
//   }

//   set diagonal(val) {
//     throw new Error('property diagonal is readonly')
//   }

//   get withSmartTV() {
//     return this.#withSmartTV;
//   }

//   set withSmartTV(val) { }
// }

// const lg = new TV(55, false, 'lg', 2000);

// // lg.diagonal = 100;

// console.log(lg.diagonal);



// class Shop extends ShopItem {

//   constructor(totalProfit,...args) {
//     super(...args)
//     this.totalProfit = totalProfit;
//   }

//   setSales(discountPercent) {

//     isOnSale = true
//     item.price *= 1 - discountPercent / 100;

//   }

//   purchaseItem(itemName) {
//     const item = this.shopItems.find((item) => item.itemName === itemName);
//     if (!item) {
//       console.log(`Item "${itemName}" not found`);
//       return;
//     }
//     item.amount--;
//     this.totalProfit += item.price;
//   }
  
// }





// console.log(shop.shopItems); // [TV, TV, Clothes, Clothes]

// shop.setSales(20);

// console.log(tv1.price, tv2.price, clothes1.price, clothes2.price); // 1600 2400 40 80

// shop.purchaseItem('Hoodie');
// shop.purchaseItem('Hoodie');
// shop.purchaseItem('Hoodie');
// shop.purchaseItem('Hoodie'); // Error: This item is out of stock

// console.log(shop.totalProfit); // 280

console.log(
    "hello"
);