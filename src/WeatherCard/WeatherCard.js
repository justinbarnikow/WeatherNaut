import React from 'react'

function WeatherCard(props) {
    if(!props.weather.name) {
        return null
    }
    const title = props.weather.name
    const imageCode = props.weather.weather[0].icon
    const image = `http://openweathermap.org/img/wn/${imageCode}@2x.png`
    const weatherType = props.weather.weather[0].main
    const weatherDescription = props.weather.weather[0].description
    const temperature = props.weather.main.temp
    const tempMin = props.weather.main.temp_min
    const tempMax = props.weather.main.temp_max

    return (
        <div className='weather_card'>
            <h2 className='city_title'>
                {title}
            </h2>
            <h3 className='weather_type'>
                {weatherType}
            </h3>
            <div className='temperature'>
                {temperature}°
            </div>
            <div className='city_image'>
                <img src={image} alt='weather_icon' />
            </div>
            <div className='weather_description'>
                {weatherDescription}
            </div>
            <div className='temp_min'>
                Low: {tempMin}°
            </div>
            <div className='temp_max'>
                High: {tempMax}°
            </div>
        </div>
    )
}

WeatherCard.defaultProps = { weather: { name: '', weather: [] }}

export default WeatherCard