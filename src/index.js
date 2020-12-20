import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './index.css';
import Index from './pages/index';
import PlaceDetail from "./pages/placeDetail";
import AddPlace from "./pages/addPlaces";
import Error from "./pages/error";
import Success from "./pages/success";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index/>
                </Route>
                <Route path="/placeDetail">
                    <PlaceDetail/>
                </Route>
                <Route path="/addPlace">
                    <AddPlace/>
                </Route>
                <Route path="/error">
                    <Error/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
