import React from "react";
import {arrayOf} from "prop-types";
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import {routes} from "../../routes";
import {Product} from "../../components/Product";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import CreateProduct from "../../components/CreateProduct/CreateProduct";

export const AdminPage = ({
                              match,
                              handleCloseModal,
                              handleCloseModalProduct,
                              handleShowModalProduct,
                              handleShowMessageClick,
                              showModal,
                              updateProduct,
                              productList,
                              addProducts,
                              showModalAddProduct,
                              onProductRemoveClick,
                              handleCreateProduct
                          }) => {
    return (
        <>
            <Route
                path={match.path}
                exact
                render={() => productList.map(({title, id}) => (<Product key={id} title={title} id={id}
                                                                         onProductRemoveClick={onProductRemoveClick}
                                                                         isAdmin={true}/>))}/>
            <Route path={match.path}
                   exact
                   render={() => (
                       <button onClick={handleShowModalProduct}>Create Product</button>
                   )}/>
            {showModalAddProduct ? (<>
                    <CreateProduct handleCloseModal={handleCloseModalProduct}
                                   handleShowMessageClick={handleShowMessageClick} onSubmit={handleCreateProduct}/>
                </>
            ) : null}
            <div id="createProduct">
            </div>

            <Route
                path={routes.adminProduct}
                exact
                render={(renderProps) =>
                    (<ProductContainer handleCloseModal={handleCloseModal}
                                       handleShowMessageClick={handleShowMessageClick}
                                       showModal={showModal}
                                       updateProduct={updateProduct}
                                       productList={productList}  {...renderProps} isAdmin={true}/>)}/>

        </>
    )
};

AdminPage.propTypes = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })).isRequired
};