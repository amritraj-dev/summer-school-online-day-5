document.getElementById("get_weather").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        display("geolocation is not supported by this browser")
    }
});

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "af52447517010ffc56e95f8b46a1313c"; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=chandigarh'

    fetch(url)
    .then(response => {
        if (!response.ok) throw new Error("your network response was not ok");
        return response.json();
    })
    .then(data => {
        const temp = data.main.temp;
        const city = data.name;
        const condition = data.weather[0].description;
        display('📍 ${city}<br>🌡️ ${temp}°C<br>🌤️ ${condition}');
    })
    .catch(() => {
        display("failed to fetch weather data");
    });
}
function error() {
  display("Unable to retrieve your location.");
}

function display(message) {
  document.getElementById("weatherResult").innerHTML = message;
}
