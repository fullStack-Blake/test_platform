import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Feed from './Feed.jsx'

const Router = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Feed} />
                <Route path="/feed" exact component={Feed} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    </div>
)

export default Router