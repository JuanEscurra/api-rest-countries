import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useGetCountries } from '../../hooks/useGetCountries';

export const CountryScreen = () => {
    
    const history = useHistory();
    const {alpha3Code} = useParams();
    
    const {countries:country,loading} = useGetCountries({
        get: 'byAlpha3Code',
        country: {
            alpha3Code
        }
    });

    const goBack = () => {
        history.push('/')
    }

    return (
        <div className="main">
            <button onClick={goBack} className="btn">
                <i className="fas fa-arrow-left"></i> Back
            </button>
            <div className="details">
                {!loading || 'cargando'}
                    <img
                        className="details__img"
                        src={country.flags?.png} alt={"imagen"} loading="lazy" />
                <div className="details__main">
                    <h3>{country.name?.common}</h3>
                    <div className="details__content">
                        <div className="details__primary">
                            <p>Native Name: <span>{country.name?.official}</span></p>
                            <p>Population: <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Sub Region: <span>{country.subregion}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>

                        </div>
                        <div className="details__secondary">
                            <p>
                                Currencies: 
                                <span>
                                    {country.currencies != null
                                        && Object.values(country?.currencies).map(currency => currency.name + ", ")}
                                </span>
                            </p>
                            <p>
                                Languages:  
                                <span>
                                    {country.languages != null
                                        && Object.values(country?.languages).map(language => language + ", ")}
                                </span>
                            </p>
                        </div>
                        
                        {
                            (country.borders)?.length === 0 ||
                            <div className="details__tertiary">
                                <p>
                                    Border Countries: 
                                    {
                                        country.borders?.map(border => (
                                            <span className="details__border" key={border}>
                                                {border}
                                            </span>
                                        ))
                                    }
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
