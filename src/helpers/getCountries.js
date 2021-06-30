
export const getCountries = async() => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/all`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByName = async(name) => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByRegion = async(region) => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByCode = async(code) => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}