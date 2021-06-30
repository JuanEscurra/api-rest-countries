import React from 'react'
import {CountryItem} from './CountryItem'

export const CountriesList = ({countries}) => {

    return (
        <div className="countries__list">
            {
                countries?.length !== 0 || <span>No se encontro paises</span>
            }
            {
                
                countries?.map(country => (
                    <CountryItem key={country.alpha3Code}
                        country={
                            {
                                alpha3Code: country.alpha3Code,
                                name: country.name,
                                population: country.population,
                                region: country.region,
                                capital: country.capital,
                                img: country.flag
                            }
                        }
                    />
                ))
            }
        </div>
    )
}
