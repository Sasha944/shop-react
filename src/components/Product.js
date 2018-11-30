import React from "react";
import {number , string} from "prop-types";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import {formatRoute} from "react-router-named-routes";
import "./Product.css";

export const Product = ({title, id, onProductRemoveClick, isAdmin, img, price }) => (
    <div className="product-item">
        {isAdmin && (<>
            <Link className="product-item-link" to={formatRoute(routes.adminProduct, {id})}>{title} </Link>
            <a className="action-remove" href="#" onClick={event => onProductRemoveClick(event, id)}>Delete</a></>) }
        {!isAdmin &&
        <div>
            <Link to={formatRoute(routes.userProduct, {id})}><img src={img} alt=""/> </Link>
            <div className="product-description">
                <div className="price-box">
                    <span className="price">
                        {price} $
                    </span>
                </div>
                <Link className="product-item-link" to={formatRoute(routes.userProduct, {id})}>{title} </Link>
            </div>
        </div>}
    </div>
);

Product.propTypes = {
    id: number.isRequired,
    title: string.isRequired
};
