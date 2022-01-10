import React from 'react'
import Results from '../Results/Results'
import Searchbar from '../Searchbar/Searchbar'
import Title from '../Title/Title'

function HomePage() {
    return (
        <section className='HomePage_section'>
            <Title />
            <Searchbar />
            <Results />
        </section>
    )
}

export default HomePage
