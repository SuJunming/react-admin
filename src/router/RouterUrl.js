import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import Buttons from '../components/UI/buttons';
export default class RouterUrl extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Buttons} />
                    <Route path='/Buttons' component={Buttons} />
                </Switch>
            </BrowserRouter>
        )
    }
}