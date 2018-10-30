import React from "react";
import {arrayOf} from "prop-types";
import {productPropTypes} from "../../common/propTypes";
import {ProductContainer} from "../../components/ProductContainer/ProductConainer";
import {Product} from "../../components/Product"
import {Route} from "react-router-dom";
import {routes} from "../../routes";
import CreateProduct from "../../components/CreateProduct/CreateProduct";

export const AdminPage = ({handleCloseModalProduct, handleShowModalProduct, productList, match, updateProduct, handleCloseModal, handleShowMessageClick, showModal, onProductRemoveClick, addProducts, showModalAddProduct}) => {
    return (
        <div>
            <Route
                path={match.path}
                exact
                render={() => {
                    console.log(productList);
                    return (productList.map(({title, id}) => <Product key={id} title={title} id={id}
                                                                      onProductRemoveClick={onProductRemoveClick}/>))
                }}/>
            <Route
                path={match.path}
                exact
                render={() => (
                    <>
                        <button onClick={handleShowModalProduct}>Create Product</button>
                        <div id="createProduct">
                        </div>
                    </>
                )}/>
            <div>
                {showModalAddProduct ? (
                    <CreateProduct handleCloseModal={handleCloseModalProduct}
                                   handleShowMessageClick={handleShowMessageClick} onSubmit={
                        event => {
                            event.preventDefault();
                            const data = Object.values(event.target).reduce((acc, current) => {
                                const key = current.name;
                                if (key) {
                                    if (current.type === "number") {
                                        return {
                                            ...acc,
                                            [key]: Number(current.value)
                                        }
                                    } else {
                                        return {
                                            ...acc,
                                            [key]: current.value
                                        };
                                    }
                                }
                                return acc;
                            }, {});
                            let newArr = [];
                            newArr.push(data);
                            addProducts(newArr);
                        }
                    }/>
                ) : null}

            </div>
            <Route path={routes.adminProduct}
                   render={(renderProps) => <ProductContainer handleCloseModal={handleCloseModal}
                                                              handleShowMessageClick={handleShowMessageClick}
                                                              showModal={showModal} updateProduct={updateProduct}
                                                              productList={productList}  {...renderProps}/>}/>
        </div>
    )
};

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};