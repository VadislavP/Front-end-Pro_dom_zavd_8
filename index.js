// Максимально використовуючи функції та конструктори.

//     Створити сутність людини, яка міститиме властивості “ім'я” та “вік”. А також мати метод виведення даних об'єкта
//      Створити сутність автомобіля.Вона має містити мінімум 3 характеристики.А також мати метод виведення на екран даних про цей автомобіль.І метод присвоєння цього автомобіля власнику(метод повинен записати в автомобіль об'єкт власника з попереднього пункту)

// Всі дані про людину та автомобіль отримувати від користувача(prompt)





let name = prompt("Введіть ім'я користувача");
let age = prompt("Введіть вік користувача");
let make = prompt("Введіть марку автомобіля");
let model = prompt("Введіть модель автомобіля");
let year = prompt("Введіть рік випуску автомобіля");
let color = prompt("Введіть колір автомобіля");

function UserData(name, age) {
    this.name = name;
    this.age = age;
}
const client = new UserData(name, age);

function Car (make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    addClient = function () {        
        const addData = { name, age, make, model, year, color };
        this.addData = addData;
        return `клієнт: ${name}, вік: ${age}, марка автомобіля: ${make}, модель автомобіля: ${model}, рік випуску автомобіля: ${year}, колір автомобіля: ${color}`
    }
}

const auto = new Car(make, model, year, color)


console.log(client); // Виводить дані про клієнта
console.log(auto); // Виводить дані про автомобіль 
console.log(addClient()); // Метод функції Car, який повертає значення із данними про клієнта та автомобіль
console.log(addData) // константа addData, яка була створена в методі addClient, яка створює новий об'єкт з даними про клієнта та про автомобіль