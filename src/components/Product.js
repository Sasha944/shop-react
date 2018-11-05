import React from "react";
import {number, string} from "prop-types";
import {Link, Route} from "react-router-dom";
import {routes} from "../routes";
import {formatRoute} from "react-router-named-routes";
import "./Product.css";
import ProductContainer from "./ProductContainer/ProductContainer";

export const Product = ({title, id, onProductRemoveClick, isAdmin, }) => (
    <div className="product-item">
        {isAdmin && (<>
            <Link className="product-item-link" to={formatRoute(routes.adminProduct, {id})}>{title} </Link>
            <a className="action-remove" href="#" onClick={event => onProductRemoveClick(event, id)}>Delete</a></>) }
        {!isAdmin && <Link className="product-item-link" to={formatRoute(routes.userProduct, {id})}>{title} </Link>}
    </div>
);

Product.propTypes = {
    id: number.isRequired,
    title: string.isRequired
};
