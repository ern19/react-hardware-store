import React, { Component } from 'react';

class AdminView extends Component {
    constructor(){
        super()

        this.state = {
            productList: [
              {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
              },
              {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
              }
            ]
          }
    }
    render() {
        return (
            <div>
                <h1>AdminView</h1>
                <h2>Products</h2>
                <div>
                    {this.state.productList.map((product, index) => {
                        return(
                            <div>
                                <h3>{product.productName}</h3>
                                <h4>{product.description}</h4>
                                <p>{product.price}</p>
                            </div>
                        )
                    })}
                    <div>
                        <h3>A Hammer!</h3>
                        <h4>$5.00</h4>
                        <p>It's a hammer!</p>
                    </div>
                    <div>
                        <h3>A Hose clamp!</h3>
                        <h4>$2.00</h4>
                        <p>It's a hose clamp!</p>
                    </div>
                    <div>
                        <h3>A Nail!</h3>
                        <h4>$0.50</h4>
                        <p>It's a nail!</p>
                    </div>
                </div>
                <h2>Create a new product</h2>
                <div>    
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Price"/>
                        <input type="text" placeholder="Description"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminView;