import * as React from "react";
import { Switch, Route } from "react-router-dom";

import MainItemsDisplay from "./component/MainItemsDisplay";
import Cart from "./container/Cart";


export default ({ childProps }) => (
    <Switch>
        <Route path="/" exact component={MainItemsDisplay} props={childProps} />
        <Route path="/cart" exact component={Cart} props={childProps} />
    </Switch>
);