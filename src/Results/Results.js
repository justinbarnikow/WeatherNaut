import React from 'react'
import AppContext from '../AppContext'
import WeatherCard from '../WeatherCard/WeatherCard'

function Results() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if (value.weatherList.length == 0) {
                    return <div className='no_zipcode_text'>
                        No zipcode    
                    </div>
                }
                return (
                    <article className='results_article'>
                        <ul className='results_list grid_list'>
                            {value.weatherList.map((weather, i) => {
                                return (
                                    <li key={i} className='grid_item'>
                                        <WeatherCard weather={weather} key={i} />
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
