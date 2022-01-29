import React from 'react'
import AppContext from '../AppContext'

function WeatherCard(props) {
    const indexKey = props.ind
    if(!props.weather.name) {
        return null
    }
    const title = props.weather.name
    const imageCode = props.weather.weather[0].icon
    const image = `http://openweathermap.org/img/wn/${imageCode}@2x.png`
    const weatherDescription = props.weather.weather[0].description
    const temperature = Math.round(props.weather.main.temp)
    const tempMin = Math.round(props.weather.main.temp_min)
    const tempMax = Math.round(props.weather.main.temp_max)

    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <div className='weather_card'>
                        <h2 className='city_title'>
                            {title}
                        </h2>
                        <div className='city_image'>
                            <img src={image} alt='weather_icon' />
                        </div>
                        <div className='temperature'>
                            {temperature}°
                        </div>
                        <div className='min_max_group'>
                            <div className='temp_min'>
                                {tempMin}°
                            </div>
                            <div className='temp_max'>
                                {tempMax}°
                            </div>
                        </div>
                        <div className='weather_description'>
                            {weatherDescription}
                        </div>
                        <form className='trash_button' onSubmit={(e) => value.removeWeather(e, indexKey)}>
                            <button type='submit'><img alt='trash can icon' src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
                            </button>
                        </form>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

WeatherCard.defaultProps = { weather: { name: '', weather: [] }}

export default WeatherCard