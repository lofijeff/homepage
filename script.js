function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
function getWeather() {
    const apiKey = 'bca3914709396023de65dacf08bcd886';
    const city = 'Umeå';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            document.getElementById("weather").textContent = `${temp}°C, ${description}`;
        })
        .catch(error => {
            document.getElementById("weather").textContent = "Väderinformation kunde inte hämtas.";
        });
}

getWeather();

