import React, { Component } from 'react'

// root imports
import styles from './App.module.css'
import {fetchData} from './api'
// components imports
import { Cards, Chart, CountryPicker } from './components'


export default class App extends Component {

    state = { data: {}, country: '' }
    
    async componentDidMount(){
        const fetchedData = await fetchData()
        // console.log(fetchedData)
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        console.log(country)
        // fetch the data
        const fetchedData = await fetchData(country)
        console.log(fetchedData)
    }
    render() {
        const {data} = this.state
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                
                <Chart />

            </div>
        )
    }
}
