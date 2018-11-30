import React, {Component} from 'react';
import { Route } from "react-router-dom";
import {routes} from "./routes";
import { AdminPage } from "./scenes/admin/admin";
import { UserPage } from "./scenes/user/user";
import {products} from "./data/product";
import  "./App.css";

const getProducts = async () => products;

class App extends Component {

    constructor(props) {
        super(props);
        super(props);
        this.updateProduct = this.updateProduct.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleShowMessageClick = this.handleShowMessageClick.bind(this);
        this.onProductRemoveClick = this.onProductRemoveClick.bind(this);
        this.handleCreateProduct = this.handleCreateProduct.bind(this);
        this.handleShowModalProduct = this.handleShowModalProduct.bind(this);
        this.handleCloseModalProduct = this.handleCloseModalProduct.bind(this);
    }
    state = {
        products: [],
        showModal: false,
        showModalAddProduct: false,
    };

    handleCloseModalProduct = () => this.setState({ showModalAddProduct: false});
    handleShowModalProduct = () => this.setState({ showModalAddProduct: true});
    handleShowMessageClick = () => this.setState({ showModal: true});
    handleCloseModal = () => this.setState({ showModal: false});

    async componentDidMount() {
        const prods = await getProducts();
        this.setState({
            products: prods
        })
    }

    onProductRemoveClick(event,id) {
        event.preventDefault();
        this.setState({
            products: this.state.products.filter((Product) => Product.id !== id)
        })
    }

    handleCreateProduct(event) {
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
        this.setState({
            products: newArr.concat(this.state.products)
        });
    }

    updateProduct(NewProduct) {
        this.setState({
            products: this.state.products.map(OldProduct => {
                if (OldProduct.id === NewProduct.id) {
                    return NewProduct
                }
                return OldProduct
            })
        })
    }

    render() {
        return (
            <div className="App">
                <Route path={ routes.admin }
                render={ (renderProps) =>
                    ( <AdminPage
                    handleCloseModal={this.handleCloseModal}
                    handleCloseModalProduct={this.handleCloseModalProduct}
                    handleShowModalProduct={this.handleShowModalProduct}
                    handleShowMessageClick={this.handleShowMessageClick}
                    showModal={this.state.showModal}
                    updateProduct={this.updateProduct}
                    productList={this.state.products}
                    handleCreateProduct={this.handleCreateProduct}
                    showModalAddProduct={this.state.showModalAddProduct}
                    onProductRemoveClick={this.onProductRemoveClick}
                    {...renderProps} />)} />
                <Route path= {routes.user} exect
                       render={ (renderProps) =>
                           ( <UserPage
                               productList={this.state.products}
                               {...renderProps} />)} />
            </div>
        );
    }
}

export default App;
