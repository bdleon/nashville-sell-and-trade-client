import React from "react";
import { Route } from "react-router";
import { ProductCurrentUser } from "./product/ProductCurrentUser";
import { ProductForm } from "./product/ProductForm";
import { ProductList } from "./product/ProductList";
import {Product} from "./product/Product"
import { MessageList } from "./message/MessageList";

export const ApplicationViews = () =>{
    return(
        <>
        <Route exact path="/">
            <ProductList/>

        </Route>
        <Route exact path="/form">
            <ProductForm/>

        </Route>
        <Route exact path="/product/my_products">
            <ProductCurrentUser/>

        </Route>
        <Route exact path="/product/:productId(\d+)">
            <Product />

        </Route>
        <Route exact path="/product/messages">
            <MessageList/>

        </Route>
        </>
    )
}