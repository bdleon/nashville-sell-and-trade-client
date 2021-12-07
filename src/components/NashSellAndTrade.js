import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Route, Redirect} from "react-router-dom"


export const NashSellAndTrade = ()=>{
    
    
    
    return(
        <>
        
        <Route render={() => {
            if (localStorage.getItem("nst_token")) {
                return <>
                    <Route>
                        
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
        </>
    )

}

