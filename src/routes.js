//Dependencies
import React from 'react';
import{Route,Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Counter from './components/Counter';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes=()=>
<App>
    <Switch>
        <Route path="/counter" component={Counter}/>
        <Route exact path="/" component={Home}/>
        <Route component={Page404}/>
    </Switch>
</App>

export default AppRoutes;
