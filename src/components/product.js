import React from "react";
import styled from "styled-components";
import {productPropTypes} from "../common/propTypes";
import {arrayOf} from "prop-types";

const InputField = styled.input`
display: block;`;



const ProductComponent = ({title, id, description, image, price, onSubmit}) => {
    console.log("h1", title);
    return (
        <form action="" onSubmit={onSubmit}>
            <InputField name="title" defaultValue={title}/>
            <textarea name="description" value={description} rows="4" cols="50"/>
            <InputField name="image" defaultValue={image}/>
            <InputField name="price" defaultValue={price}/>
            <button type="submit">Save</button>
        </form>
    )
};
ProductComponent.propTypes = productPropTypes;

export const ProductContainer = ({match: {params}, productList, updateProduct}) => {
    const product = productList.find(({id}) => Number(params.id) === id);
    return <ProductComponent {...product} onSubmit={event => {
        event.preventDefault();
        console.log(Object.values(event.target));
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
}