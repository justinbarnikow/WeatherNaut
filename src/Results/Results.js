import React from 'react'
import AppContext from '../AppContext'
import WeatherCard from '../WeatherCard/WeatherCard'

function Results() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if (value.weatherList.length === 0) {
                    return null
                }
                return (
                    <article className='results_article'>
                        <ul className='results_list'>
                            {value.weatherList.map((weather, i) => {
                                return (
                                    <li key={i} >
                                        <WeatherCard weather={weather} key={i} ind={i} />
                                    </li>
                                )
                            })}
                        </ul>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default Results
