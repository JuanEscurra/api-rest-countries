import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {Navbar} from '../components/ui/Navbar'
import {HomeScreen} from '../components/home/HomeScreen'
import {CountryScreen} from '../components/countries/CountryScreen'

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/country/:alpha3Code" component={CountryScreen} />
            </Switch>
        </Router>
    )
}
