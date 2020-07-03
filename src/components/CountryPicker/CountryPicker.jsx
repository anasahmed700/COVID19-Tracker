import React, {useState, useEffect} from 'react'
import {FormControl, NativeSelect} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedcountries, setFetchedcountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedcountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedcountries]);
    // console.log(fetchedcountries)

    return (
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedcountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;