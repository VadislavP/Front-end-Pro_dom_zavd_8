// Сутність "Людина"
function Person() {
    this.name = "";
    this.age = 0;

    // Метод для виведення даних про людину
    this.displayInfo = function () {
        console.log("Ім'я: " + this.name);
        console.log("Вік: " + this.age);
    };
}

// Сутність "Автомобіль"
function Car() {
    this.make = "";
    this.model = "";
    this.year = 0;
    this.owner = null;

    // Метод для виведення даних про автомобіль
    this.displayInfo = function () {
        console.log("Марка: " + this.make);
        console.log("Модель: " + this.model);
        console.log("Рік випуску: " + this.year);
    };

    // Метод для присвоєння власника автомобіля
    this.assignOwner = function (person) {
        this.owner = person;
    };
}

// Створення об'єкта "Людина" і отримання даних від користувача
const person = new Person();
person.name = prompt("Введіть ім'я людини:");
person.age = parseInt(prompt("Введіть вік людини:"));

// Створення об'єкта "Автомобіль" і отримання даних від користувача
const car = new Car();
car.make = prompt("Введіть марку автомобіля:");
car.model = prompt("Введіть модель автомобіля:");
car.year = parseInt(prompt("Введіть рік випуску автомобіля:"));

// Виведення інформації про людину та автомобіль
person.displayInfo();
car.displayInfo();

// Присвоєння автомобілю власника
car.assignOwner(person);

// Виведення інформації про автомобіль та його власника
console.log("Інформація про автомобіль та його власника:");
car.displayInfo();
console.log("Власник автомобіля:");
car.owner.displayInfo();
console.log(car)