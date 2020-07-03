import React, { Component } from 'react'

// root imports
import styles from './App.module.css'
import {fetchData} from './api'
// components imports
import { Cards, Chart, CountryPicker } from './components'
import covid19 from './images/image.png'


export default class App extends Component {

    state = { data: {}, country: '' }
    
    // for making request to fetch data 
    async componentDidMount(){
        const fetchedData = await fetchData()
        // console.log(fetchedData)
        this.setState({ data: fetchedData })
    }

    // for fetching specific country data 
    handleCountryChange = async (country) => {
        console.log(country)
        // fetch the data
        const fetchedData = await fetchData(country)
        // console.log(fetchedData)
        this.setState({ data: fetchedData, country: country })
    }
    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <img src={covid19} alt="COVID-19" className="covid-img"/>

                <Cards data={data}/>
                
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                
                <Chart data={data} country={country} />

            </div>
        )
    }
}
