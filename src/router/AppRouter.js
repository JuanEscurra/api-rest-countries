import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import {Navbar} from '../components/ui/Navbar'
import {HomeScreen} from '../components/home/HomeScreen'
import {CountryScreen} from '../components/countries/CountryScreen'

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/all" component={HomeScreen} />
                <Route exact path="/country/:alpha3Code" component={CountryScreen} />
                <Redirect to="/all" />
            </Switch>
        </Router>
    )
}
