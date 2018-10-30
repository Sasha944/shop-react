import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import {routes} from "./routes";
import {AdminPage} from "./scenes/admin/index";
import {products} from "./data/product";
import  "./App.css";

const getProducts = async () => products;

class App extends Component {
    constructor(props) {
        super(props);
        this.updateProduct = this.updateProduct.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleShowMessageClick = this.handleShowMessageClick.bind(this);
        this.onProductRemoveClick = this.onProductRemoveClick.bind(this);
        this.addProducts = this.addProducts.bind(this);
        this.handleShowModalProduct = this.handleShowModalProduct.bind(this);
        this.handleCloseModalProduct = this.handleCloseModalProduct.bind(this);
    }

    state = {
        products: [],
        showModal: false,
        showModalAddProduct: false,
    }

    handleCloseModalProduct = () => this.setState({showModalAddProduct: false});
    handleShowModalProduct = () => this.setState({showModalAddProduct: true});
    handleShowMessageClick = () => this.setState({showModal: true});
    handleCloseModal = () => this.setState({showModal: false});

    async componentDidMount() {
        const prods = await getProducts();
        this.setState({
            products: prods
        })
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

    addProducts(NewProduct) {
        this.setState({
            products: NewProduct.concat(this.state.products)
        });
    }

    onProductRemoveClick(event,id) {
        event.preventDefault();
        this.setState({
            products: this.state.products.filter((Product) => Product.id !== id)
        })
    }

    render() {
        return (
            <div className="App">
                <Link to={routes.admin}> Admin </Link>
                <Route path={routes.admin}
                       render={props => <AdminPage handleCloseModal={this.handleCloseModal}
                                                   handleShowMessageClick={this.handleShowMessageClick}
                                                   showModal = {this.state.showModal}
                                                   handleShowModalProduct = {this.handleShowModalProduct }
                                                   handleCloseModalProduct = {this.handleCloseModalProduct }
                                                   showModalAddProduct = {this.state.showModalAddProduct}
                                                   updateProduct = {this.updateProduct}
                                                   productList = {this.state.products}
                                                   onProductRemoveClick = {this.onProductRemoveClick }
                                                   addProducts={this.addProducts}
                                                   {...props}
                       />}/>
            </div>
        );
    }
}

export default App;
