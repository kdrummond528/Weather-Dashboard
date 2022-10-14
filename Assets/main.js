function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    // cityName.innerHTML = "" + newName.value + ""

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newName.value + "&appid=7597491b6242d4f906fcc00b4ac13a89")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp - 222.15).toFixed(1) + "°";
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed) + " MPH";
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Humidity").innerHTML = "Humidity: " + Number(data.list[i].main.humidity).toFixed(1) + "%";
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }
        })

        .catch(err => alert("Something went wrong."))
}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "Atlanta";
    GetInfo();
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
}