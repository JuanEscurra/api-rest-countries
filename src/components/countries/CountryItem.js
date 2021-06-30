import React from 'react'
import { useHistory } from 'react-router-dom'

export const CountryItem = ({country}) => {

    const history = useHistory();

    const viewDetails = () => {
        history.push(`/country/${country.alpha3Code.toLowerCase()}`);
    }

    return (
        <div className="country" onClick={viewDetails}>
            <img src={country.img} loading="lazy" alt={country.name} className="country__img"/>
            <div className="country__description">
                <h4>{country.name}</h4>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
        </div>
    )
}
