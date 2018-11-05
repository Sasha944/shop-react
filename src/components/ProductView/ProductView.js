import React from "react";
import {productPropTypes} from "../../common/propTypes";
import Modal from "../ProductView/Modal";

const ProductView = ({isAdmin, params, onSubmit , handleShowMessageClick , handleCloseModal , showModal , title , price , image , description }) => {
    console.log(isAdmin);
    return (
        <>
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
        {isAdmin ? (<div>
            <div>
                <button onClick={ handleShowMessageClick }>
                    Edit
                </button>
                <div id="itemProduct">

                </div>
                {showModal ? (
                    <Modal productList={{ title , price , image , description }} handleCloseModal={handleCloseModal} onSubmit={onSubmit}/>
                ) : null}
            </div>
        </div>) : null }
        </>
)};


export default ProductView;