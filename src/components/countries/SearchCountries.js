import React from 'react'

export const SearchCountries = ({setCountry}) => {

    const handleSearch = (e) => {
        if(e.target.value !== undefined && e.target.value !== "") {
            setCountry({
                get: e.target.name === 'region' ? 'byRegion': 'byName',
                country: {[e.target.name]: e.target.value}
            });
        } else {
            setCountry({
                get: 'all'
            })
        }
    }

    return (
        <form className="search">
            <div className="search__camp--input">
                <i className="fas fa-search"></i>
                <input className="search__input"
                    name="name"
                    id="name"
                    placeholder="Search for a country"
                    onChange={handleSearch} />
            </div>
            <div className="search__camp--select">
                <select name="region" id="region" className="search__select" onChange={handleSearch}>
                    <option value="" defaultValue>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </form>
    )
}
