import React, { Component } from 'react'

// root imports
import styles from './App.module.css'
import {fetchData} from './api'
// components imports
import { Cards, Chart, CountryPicker } from './components'


export default class App extends Component {

    state = { data: {}, }
    
    async componentDidMount(){
        const fetchedData = await fetchData()
        // console.log(fetchedData)
        this.setState({ data: fetchedData })
    }
    render() {
        const {data} = this.state
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                {/* <Chart />
                <CountryPicker /> */}

            </div>
        )
    }
}
