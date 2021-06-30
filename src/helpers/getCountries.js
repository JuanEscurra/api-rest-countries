
export const getCountries = async() => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/all?
        fields=alpha3Code;name;population;region;capital;flag`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByName = async(name) => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/name/${name}?
        fields=alpha3Code;name;population;region;capital;flag`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByRegion = async(region) => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/region/${region}?
        fields=alpha3Code;name;population;region;capital;flag`);
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