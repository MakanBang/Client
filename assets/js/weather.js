$.ajax({
    method: 'GET',
    url: `http://localhost:3000/weather/jakarta`
})
.done(function (result) {
    let suhu = result.data.main.temp.toString()
    let celcius = suhu.slice(0,2)
    let data = `
          <div class="cuaca"> 
                <h1 class="heading weather-suhu">${result.data.weather[0].main} <span><img src="http://openweathermap.org/img/w/${result.data.weather[0].icon}.png" alt="icon"></span></h1>
                <h3 class="location weather-city">${result.data.name}</h3>
                <p class="temp">
                    <span class="temp-value weather-temp">${celcius}</span>
                    <span class="deg">0</span>
                    <a href="javascript:;"><span class="temp-type">C</span></a>
                </p>
            </div>
            `
    $( ".detail-weather" ).append(data);
    
})
.fail(function (err) {
    console.log(err);  
})

function searchWeather() {
    let city = $("#search-weather").val();
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/weather/${city}`
    })
    .done(function (result) {
            $( ".cuaca" ).hide();
            
            let suhu = result.data.main.temp.toString()
            let celcius = suhu.slice(0,2)
            let data = `
                    <div class="cuaca">
                        <h1 class="heading">${result.data.weather[0].main} <span><img src="http://openweathermap.org/img/w/${result.data.weather[0].icon}.png" alt="icon"></span></h1>
                        <h3 class="location">${result.data.name}</h3>
                        <p class="temp">
                            <span class="temp-value">${celcius}</span>
                            <span class="deg">0</span>
                            <a href="javascript:;"><span class="temp-type">C</span></a>
                        </p>
                    </div>
                    `
            $( ".detail-weather" ).append(data);
            $("#search-weather").val('')
    })
    .fail(function (err) {
        console.log(err);  
    })
    
}