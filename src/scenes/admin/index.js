import React from "react";
import {arrayOf} from "prop-types";
import {productPropTypes} from "../../common/propTypes";
import {ProductContainer } from "../../components/product";
import {Product} from "../../components"
import {Route} from "react-router-dom";
import {routes} from "../../routes"

export const AdminPage = ({productList, match,updateProduct}) => { console.log(match.path); return (
    <div>
        <Route
            path={match.path}
            exact
            render = {() => productList.map( ({title,id}) => <Product key={title} title={title} id={id}/>)} />
        <Route path={routes.adminProduct} render={(renderProps) =>  <ProductContainer updateProduct={updateProduct} productList={productList} {...renderProps}/>} />
    </div>
)};

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};