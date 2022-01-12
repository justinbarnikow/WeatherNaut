import React from 'react'

const AppContext = React.createContext({

searchWeather: () => {},
weatherList: [],
removeWeather: () => {}

})

export default AppContext