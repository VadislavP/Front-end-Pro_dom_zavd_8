const name = prompt("Введіть ім'я користувача");
const age = prompt("Введіть вік користувача");

function UserData(name, age) {
    this.name = name;
    this.age = age;
}

const client = new UserData(name, age);

client.LogData = function () {
    console.log("Ім'я:" ,name);
    console.log("Вік:", age)
}

const brand = prompt("Введіть марку автомобіля");
const model = prompt("Введіть модель автомобіля");
const year = prompt("Введіть рік випуску автомобіля");
const color = prompt("Введіть колір автомобіля");


function Car (brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;

    this.setOwner = function (client) {
        this.owner = client
    }
}

const auto = new Car(brand, model, year, color);
auto.LogData = function () {
    console.log("Інформація про автомобіль")
    console.log("Марка: ", brand);
    console.log("Модель: ", model);
    console.log("Рік випуску: ", year);
    console.log("Колір автомобіля: ", color)
}






// auto.setOwner(client);
client.LogData()// Виводить дані про клієнта
auto.LogData() // Виводить дані про автомобіль
console.log("Інформація автомобіль та його власника:");
auto.LogData();
console.log("Власник автомобіля:");
client.LogData();
console.log(auto);
