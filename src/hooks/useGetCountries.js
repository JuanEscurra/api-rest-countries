//getCountriesByCode

import { useEffect, useState } from "react"
import { getCountries, getCountriesByCode, getCountriesByName, getCountriesByRegion } from "../helpers/getCountries";

export const useGetCountries = ({get,country}) => {

    const [state, setState] = useState({
        countries: [],
        loading: true
    });
    
    useEffect(() => {
        switch (get) {
            case 'all':
                getCountries()
                    .then(data => {
                        setState({
                            countries: data,
                            loading: false
                        });
                    })
                break;
            case 'byName':
                getCountriesByName(country.name)
                    .then(data => {
                        setState({
                            countries: data,
                            loading: false
                        });
                    });
                break;
            case 'byRegion':
                getCountriesByRegion(country.region)
                    .then(data => {
                        setState({
                            countries: data,
                            loading: false
                        });
                    })
                break;
            case 'byAlpha3Code':
                getCountriesByCode(country.alpha3Code)
                    .then(data => {
                        setState({
                            countries: data,
                            loading: false
                        });
                    })
                break;
            default:
                setState({
                    countries: [],
                    loading: true
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[get,country?.alpha3Code,country?.region,country?.name]);

    return state;
}
