let userName = prompt("Adınızı giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

function showTime() {
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var day = date.getDay()

    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    var dayName;
    switch (day) {
        case 1:
            dayName = "Pazartesi"
            break;
        case 2:
            dayName = "Salı"
            break;    
        case 3:
            dayName = "Çarşamba"
            break;
        case 4:
            dayName = "Perşembe"
            break;
        case 5:
            dayName = "Cuma"  
            break;  
        case 6:
            dayName = "Cumartesi"
            break;
        case 7:
            dayName = "Pazar"
            break;
        default:
            break;
    }

    var time = `${hour} : ${minute} : ${second} ${dayName}`

    document.getElementById("myClock").innerText = time;

    setTimeout(showTime, 1000)
}

showTime()