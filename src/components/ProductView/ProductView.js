import React from "react";
import {productPropTypes} from "../../common/propTypes";
import Modal from "../ProductView/Modal";

const ProductView = ({ params, onSubmit , handleShowMessageClick , handleCloseModal , showModal , title , price , image , description }) => {
    return (
    <div>
        <div>
            <div className="title">
                {title}
            </div>
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="price">
                {price}
            </div>
            <div className="description">
                {description}
            </div>
            <button onClick={ handleShowMessageClick }>
                Edit
            </button>
            <div id="itemProduct"></div>
            {showModal ? (
                <Modal productList={{ title , price , image , description }} handleCloseModal={handleCloseModal} onSubmit={onSubmit}/>
            ) : null}
        </div>
    </div>
)};


export default ProductView;