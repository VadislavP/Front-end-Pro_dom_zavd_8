// Максимально використовуючи функції та конструктори.

//     Створити сутність людини, яка міститиме властивості “ім'я” та “вік”. А також мати метод виведення даних об'єкта
//      Створити сутність автомобіля.Вона має містити мінімум 3 характеристики.А також мати метод виведення на екран даних про цей автомобіль.І метод присвоєння цього автомобіля власнику(метод повинен записати в автомобіль об'єкт власника з попереднього пункту)

// Всі дані про людину та автомобіль отримувати від користувача(prompt)





let user = prompt("Введіть ім'я користувача");
let age = prompt("Введіть вік користувача");
let make = prompt("Введіть марку автомобіля");
let model = prompt("Введіть модель автомобіля");
let year = prompt("Введіть рік випуску автомобіля");
let color = prompt("Введіть колір автомобіля");

function UserData(user, age) {
    this.user = user;
    this.age = age;
}
const client = new UserData(user, age);

function Car (make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.user = user;
    this.age = age;

    // this.addClient = function() {
    //     this.user,
    //     this.age
    // }
    
}

const auto = new Car(make, model, year, color)


console.log(client);
console.log(auto);
// auto.addClient()
