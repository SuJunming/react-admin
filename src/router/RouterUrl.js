import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Icons from '../components/UI/Icons';
import Buttons from '../components/UI/Buttons';
export default class RouterUrl extends Component{
    render(){
        return( 
                <Switch>
                    <Route exact path="/" component={Buttons} />
                    <Route path='/ui/buttons' component={Buttons} />
                    <Route path='/ui/icons' component={Icons}/>
                </Switch>
        )
    }
}