import React from "react";
import {number,string} from "prop-types";
import {Link} from "react-router-dom";
import {routes} from "../routes";
import {formatRoute} from "react-router-named-routes";

export const Product = ({title,id,onProductRemoveClick}) => (
    <div>
        <Link to={formatRoute(routes.adminProduct,{id})}>{title} </Link>
        <a href="#" onClick={event => onProductRemoveClick(event,id)}>Delete</a>
    </div>
);

Product.propTypes = {
    id: number.isRequired,
    title: string.isRequired
};
