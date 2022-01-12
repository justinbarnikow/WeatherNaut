import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppContext from './AppContext'
import HomePage from './HomePage/HomePage'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // state goes here
      searchWeather: this.searchWeather,
      weatherList: [],
      removeWeather: this.removeWeather
    }
  }

  // functions go here

  searchWeather = (e) => {
    e.preventDefault();
    const zipcode = e.target.zipcode.value;
    const APIkey = 'd83d52d789aa4d40e2428795c27b729b'
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${APIkey}&units=imperial`
    fetch(url)
      .then(async (data) => {
        if (data.ok) {
          data = await data.json()
          this.setState({
            weatherList: [...this.state.weatherList, ...[data]]
          })
        } else {
          throw new Error(data.status + "Failed")
        }
      }).catch(e => alert('Search failed', e))
      //clear input after search
      Array.from(document.querySelectorAll('input')).forEach(
        input => (input.value = "")
      );
  }

  removeWeather = (e, indexKey) => {
    e.preventDefault()
    const newResults = this.state.weatherList.slice(0, indexKey).concat(this.state.weatherList.slice(indexKey + 1, this.state.weatherList.length))
    this.setState({
      weatherList: newResults
    })
  }

  render() {
    const contextValue = {
      searchWeather: this.state.searchWeather,
      weatherList: this.state.weatherList,
      removeWeather: this.state.removeWeather
    }
    return (
      <AppContext.Provider value={contextValue}>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    )
  }
}