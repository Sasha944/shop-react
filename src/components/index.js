import React from "react";
import {number,string} from "prop-types";
import {Link} from "react-router-dom";
import {routes} from "../routes";
import {formatRoute} from "react-router-named-routes";

export const Product = ({title,id}) => (
    <div>
        <Link to={formatRoute(routes.adminProduct,{id})}>{title} </Link>
    </div>
);

Product.propTypes = {
    id: number.isRequired,
    title: string.isRequired
};