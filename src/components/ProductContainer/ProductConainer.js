import React from "react";
import {productPropTypes} from "../../common/propTypes";
import {arrayOf} from "prop-types";
import ProductView from "../ProductView/ProductView"

export const ProductContainer = ({match:{params}, productList, updateProduct,handleShowMessageClick,handleCloseModal,showModal}) => {
    const product = productList.find(({id}) => Number(params.id) === id);
    return <ProductView showModal={showModal} handleShowMessageClick={handleShowMessageClick} params={params} handleCloseModal={handleCloseModal} {...product} onSubmit={event => {

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
    }/>
};

ProductContainer.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};

export default ProductContainer;