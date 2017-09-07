import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Icons from '../components/UI/Icons';
import Buttons from '../components/UI/Buttons';
import DropdownMenu from '../components/UI/DropdownMenu';
import Pageination from '../components/UI/Pageination';
export default class RouterUrl extends Component{
    render(){
        return( 
                <Switch>
                    <Route exact path="/" component={Buttons}/>
                    <Route path='/ui/buttons' component={Buttons}/>
                    <Route path='/ui/icons' component={Icons}/>
                    <Route path='/ui/dropdown' component={DropdownMenu}/>
                    <Route path='/ui/pageination' component={Pageination}/>
                    <Route component={Icons}/>
                </Switch>
        )
    }
}