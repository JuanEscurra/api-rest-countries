
export const getCountries = async() => {
    const countries = await fetch(`https://restcountries.com/v3.1/all?
        fields=cca3;name;population;region;capital;flag`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByName = async(name) => {
    const countries = await fetch(`https://restcountries.com/v3.1/name/${name}?
        fields=alpha3Code;name;population;region;capital;flag`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByRegion = async(region) => {
    const countries = await fetch(`https://restcountries.com/v3.1/region/${region}?
        fields=alpha3Code;name;population;region;capital;flag`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}

export const getCountriesByCode = async(code) => {
    const countries = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const jsonCountries = await countries.json();
    if(jsonCountries.status === 404) {
        return [];
    }
    return jsonCountries;
}