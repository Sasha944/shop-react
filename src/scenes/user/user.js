import React from "react";
import {Route} from "react-router-dom";
import {routes} from "../../routes";
import {Product} from "../../components/Product";
import  ProductContainer  from "../../components/ProductContainer/ProductContainer";

export const UserPage = ({
                             productList,
                             match
                         }) => (
    <>
        <Route
            path={match.path}
            exact
            render={() => productList.map(({title, id}) => (<Product key={id} title={title} id={id}
            />))}/>
        <Route
            path={routes.userProduct}
            exact
            render={(renderProps) =>
                (<ProductContainer productList={productList} isAdmin={false}  {...renderProps} />)}/>
    </>
);