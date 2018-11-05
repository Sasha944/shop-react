import React from "react";
import {arrayOf} from "prop-types";
import ProductView from "../ProductView/ProductView"
import "./ProductContainer.css";

const ProductContainer = ({match:{params}, productList, updateProduct,handleShowMessageClick,handleCloseModal,showModal, isAdmin}) => {
    const product = productList.find(({id}) => Number(params.id) === id);
    console.log(isAdmin);
    return (
        <ProductView showModal={showModal} handleShowMessageClick={handleShowMessageClick} isAdmin={isAdmin} params={params} handleCloseModal={handleCloseModal} {...product} onSubmit={event => {

        event.preventDefault();
        const data = Object.values(event.target).reduce((acc,current) => {
            const key = current.name;
            if (key) {
                return {
                    ...acc,
                    [key] :current.value
                }
            }
            return acc;
        },{});
        data.id = Number(params.id);
        updateProduct(data);
    }
    }/>)
}


export default ProductContainer;
