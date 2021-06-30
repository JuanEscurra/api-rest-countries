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

    //console.log((country.borders).length);

    return (
        <div className="main">
            <button onClick={goBack} className="btn">
                <i className="fas fa-arrow-left"></i> Back
            </button>
            <div className="details">
                {!loading || 'cargando'}
                <img
                    className="details__img"
                    src={country.flag} alt={country.name} loading="lazy" />
                <div className="details__main">
                    <h3>{country.name}</h3>
                    <div className="details__content">
                        <div className="details__primary">
                            <p>Native Name: <span>{country.nativeName}</span></p>
                            <p>Population: <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Sub Region: <span>{country.subregion}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>

                        </div>
                        <div className="details__secondary">
                            <p>Top Level Domain: 
                                <span>
                                    {country.topLevelDomain?.map(domain => (
                                        domain
                                    ))}
                                </span>
                            </p>
                            <p>
                                Currencies: 
                                <span>
                                    {country.currencies?.map(currency => (
                                        currency.name
                                    ))}
                                </span>
                            </p>
                            <p>
                                Languages: 
                                <span>
                                    {country.languages?.map(language => (
                                        language.name + ', ' 
                                    ))} 
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
