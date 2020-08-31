import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import AuthorizationPage from "./pages/AuthorizationPage"
import AuthPage from "./pages/AuthPage"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"


export const routes = () => (
    <Switch>
        <Route component={AuthPage} exact path={"/auth"} />
        <AuthorizationPage>
            <Switch>
                <Route component={MainPage} exact path="/home" />
                <Route component={ProfilePage} exact path="/profile" />
                <Redirect exact from="" to="auth" />
            </Switch>
        </AuthorizationPage>
    </Switch>
);
