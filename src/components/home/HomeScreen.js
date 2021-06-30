import React, { useState } from 'react'

import {CountriesList} from '../countries/CountriesList';
import {SearchCountries} from '../countries/SearchCountries'
import { useGetCountries } from '../../hooks/useGetCountries';

export const HomeScreen = () => {

    const [country, setCountry] = useState({
        get: 'all'
    });

    const {countries} = useGetCountries(country);

    return (
        <div className="home">
            <SearchCountries setCountry={setCountry}/>
            <CountriesList countries={countries} />
        </div>
    )
}
