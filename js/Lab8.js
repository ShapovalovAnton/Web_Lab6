class Phone{
    constructor(func){
        this.func=func;
    }
    //Обчислення вартості
    price() {
        if (this.func <= 0) {
            return "Кількість функцій повинна бути більше 0";
        }
        return (40 * Math.log(this.func)).toFixed(2);
    }
}

class Mobile_phone extends Phone{
    constructor(func, model){
        super(func); 
        this.model=model;
    }
    //Обчислення вартості
    price() {
        if (this.func <= 0) {
            return "Кількість функцій повинна бути більше 0";
        }
        return (3 * 40 * Math.log(this.func)).toFixed(2) ;
    }
}

// Функція розрахунку для всього масиву
function displayPhonePrice() {
    const funcInput = document.getElementById("phone_func").value;
    const phone = new Phone(Number(funcInput));
    document.getElementById("resultPhone").innerHTML = `Вартість: ${phone.price()}`;
}

// Функція розрахунку вартості для MobilePhone
function displayMobilePhonePrice() {
    const funcInput = document.getElementById("mobile_phone_func").value;
    const modelInput = document.getElementById("model_name").value;

    if (!funcInput || !modelInput) {
        document.getElementById("resultMobilePhone").innerHTML = "Помилка: Вкажіть модель телефону та кількість функцій.";
        return;
    }

    const mobilePhone = new Mobile_phone(Number(funcInput), modelInput);
    document.getElementById("resultMobilePhone").innerHTML = `Модель: ${modelInput}, Вартість: ${mobilePhone.price()}`;
}