import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {AdminPage} from "./scenes/admin/index";
import {products} from "./data/product";

const getProducts = async () => products;

class App extends Component {
    constructor(props) {
        super(props);
        this.updateProduct = this.updateProduct.bind(this);
    }
    state = {
        products: []
    };

    async componentDidMount() {
        const prods = await getProducts();
        this.setState({
            products: prods
        })
    }

    updateProduct(NewProduct) {
        console.log(NewProduct)
        this.setState({
            products: this.state.products.map( OldProduct => {
                if(OldProduct.id === NewProduct.id) {
                    return NewProduct
                }
                return OldProduct
            })
        })
    }

    render() {
        return (
            <div className="App">
                <Link to={routes.admin}>Admin</Link>
                <Route path={routes.admin} render={props => <AdminPage updateProduct={this.updateProduct} productList={this.state.products} {...props}
                                                                       />}/>
            </div>
        );
    }
}

export default App;
