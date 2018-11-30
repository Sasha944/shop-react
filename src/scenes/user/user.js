import React from "react";
import { Route, Link } from "react-router-dom";
import {routes} from "../../routes";
import  Navigation   from "../../components/navigation/Navigation";
import {Product} from "../../components/Product";
import  ProductContainer  from "../../components/ProductContainer/ProductContainer";
import ContactUs from "../../components/StaticPages/ContactUs";
import AboutUs from "../../components/StaticPages/AboutUs";
import "./User.css"

export const UserPage = ({
                             productList,
                             match
                         }) => (
    <>
        <header className="user_header">
            <Navigation />
            <div className="statick_pages">
                <li>
                    <Link to={routes.aboutUs}> About Us </Link>
                </li>
                <li>
                    <Link to={routes.contactUs}> Contact Us </Link>
                </li>
                <li>
                    <a href="">Shopping Cart</a>
                </li>
            </div>
        </header>
        <Route
            path={routes.contactUs}
            exact
            component={ContactUs}/>
        <Route
            path={routes.aboutUs}
            exact
            component={AboutUs}/>
        <Route
            path={match.path}
            exact
            render={() => productList.map(({title, id, image , price}) => (<Product key={id} title={title} id={id} img={image} price={price}
            />))}/>
        <Route
            path={routes.userProduct}
            exact
            render={(renderProps) =>
                (<ProductContainer productList={productList} isAdmin={false}  {...renderProps} />)}/>
    </>
);