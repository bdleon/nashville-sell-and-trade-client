import React from "react";
import { Route } from "react-router";
import { ProductCurrentUser } from "./product/ProductCurrentUser";
import { ProductForm } from "./product/ProductForm";
import { ProductList } from "./product/ProductList";

export const ApplicationViews = () =>{
    return(
        <>
        <Route exact path="/">
            <ProductList/>

        </Route>
        <Route exact path="/form">
            <ProductForm/>

        </Route>
        <Route exact path="/product/user">
            <ProductCurrentUser/>

        </Route>
        </>
    )
}