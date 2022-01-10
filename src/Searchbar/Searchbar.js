import React from 'react'
import AppContext from '../AppContext'

function Searchbar() {
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='searchbar_article'>
                        <form className='searchbar_form' onSubmit={(e) => value.searchWeather(e)}>
                            <input 
                                type='text' name='zipcode' id='zipcode' aria-label='weather zipcode'
                                placeholder='enter a zipcode...' required
                            />
                            <button type='submit'>
                                Search
                            </button>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default Searchbar
