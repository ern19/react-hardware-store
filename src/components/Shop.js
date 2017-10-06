import React, { Component } from 'react';
import ShopView  from "./ShopView"
import CartView from "./CartView"
import AdminView from "./AdminView"

class Shop extends Component {
    constructor(){
        super()

        this.state = {
            isAdmin: true
        }
    }
    render() {
        return (
            <div className="shop">
                <div className="products">
                    
                    {this.state.isAdmin ? <ShopView />}

                </div>

                <div className="">
                    <AdminView />
                </div>

                <CartView />

            </div>
        );
    }
}

export default Shop;