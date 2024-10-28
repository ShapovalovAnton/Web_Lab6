var arrConference = []
var html="";
arrConference[0] = {
    name: "Сучасна фізика",
    sections: ["Фізика вчора", "Фізика сьогодні", "Фізика завтра"],
    university: "КПІ",
    startDate: new Date("2024-10-28")
};

arrConference[1] = {
    name: "Алгоритмізація і програмування",
    sections: ["Алгоритмізація", "Програмування", "Аналіз"],
    university: "КНУ",
    startDate: new Date("2024-10-26")
};

arrConference[2] = {
    name: "Міжнародна конференція з біомедичних наук",
    sections: ["Загадка скелета", "Таємниця печінки", "Секрет мозку"],
    university: "ХНМУ",
    startDate: new Date("2024-10-27")
};

arrConference[3] = {
    name: "Машинобудування",
    sections: ["Машина та людина", "Машина та технології", "Машина та машина"],
    university: "ДДМА",
    startDate: new Date("2024-10-25")
};

arrConference[4] = {
    name: "Економіка України",
    sections: ["Економіка України", "Економіка міст", "Економіка сіл"],
    university: "КНЕУ",
    startDate: new Date("2024-10-30")
};

arrConference[5] = {
    name: "Екологія та природокористування",
    sections: ["Екологічний менеджмент", "Охорона навколишнього середовища", "Екологічна політика"],
    university: "ОНУ",
    startDate: new Date("2024-10-25")
};

arrConference[6] = {
    name: "Туризм",
    sections: ["Готелі", "Ресторани", "Аеропорти"],
    university: "КПІ",
    startDate: new Date("2024-10-26")
};

function diff_dates (date){
var currentDate= new Date();
var timeDiff = date.getTime() - currentDate.getTime();
var DaysDiff = Math.ceil(timeDiff/(1000*3600*24));
return DaysDiff;
}

// Функція виведення окремого запису масиву
function vivod(item, i, array) {
    var diffDays = diff_dates(item.startDate);

    // Додавання даних конференції до таблиці
    html += "<td>" + item.name + "</td>";
    html += "<td>" + item.startDate.toLocaleDateString('uk-UA') + "</td>";
    html += "<td>" + item.university + "</td>";
    if (diffDays>0) {
        html += "<td>" + "Конференція почнеться через " + diffDays + " днів"+"</td>";}
        else if (diffDays<-2){html += "<td>" + "Конференція завершилась " + diffDays + " днів назад"+"</td>";}
        else if (diffDays!=0) {html += "<td>" + "До кінця конференції залишилось " + Math.abs(diffDays) + " дні"+"</td>";}
        else {html += "<td>" + "Сьогодні останній день"+"</td>"}
    if(diffDays>0 || diffDays<-2){html += "<td>" + "-"+"</td>";}
    else {html += "<td>" + item.sections[Math.abs(diffDays)]+"</td>";}
    html += "</tr>";
}

// Функція розрахунку для всього масиву
function displayConferences() {
    html = "<table style='border: 1px solid black; width: 100%;'>";
    html += "<tr><th>Назва конференції</th><th>Дата</th><th>Університет</th><th>Cтатус</th><th>Сьогодні секція</th></tr>";    
    arrConference.forEach(vivod);
    html += "</table>";
    document.getElementById('result').innerHTML = html;
}