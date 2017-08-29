import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import Icon from '../components/UI/Icon';
import Buttons from '../components/UI/Buttons';
import App from '../App'
export default class RouterUrl extends Component{
    render(){
        return( 
                <Switch>
                    <Route exact path="/" component={Buttons} />
                    <Route path='/buttons' component={Buttons} />
                    <Route path='/icon' component={Icon}/>
                </Switch>
        )
    }
}