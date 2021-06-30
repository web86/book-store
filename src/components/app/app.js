import React from "react";
import './app.css';
import ShopHeader from "../shop-header";
import {Route, Switch} from "react-router-dom";
import {HomePage, CartPage} from "../pages"

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader />
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' exact component={CartPage}/>
            </Switch>
        </main>
    );
};

export default App;
