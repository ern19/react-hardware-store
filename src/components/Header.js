import React, { Component } from 'react';
import EditSaleItem from "./EditSaleItem"

class Header extends Component {
    constructor(){
        super()
        this.state ={
            itemCurrentlyOnSale: "A hammer!",
            editSaleItem: false,
            
        }
    }
    toggleEditSaleItem = () => {
        this.setState({editSaleItem: !this.state.editSaleItem})
    }
    handleItemCurrentlyOnSaleChange = (event) => {
        this.setState({itemCurrentlyOnSale: event.target.value})        
    }
    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}</p>
                <EditSaleItem 
                    itemCurrentlyOnSale = {this.state.itemCurrentlyOnSale}
                    editSaleItem = {this.state.editSaleItem}
                    toggleEditSaleItem = {this.toggleEditSaleItem}
                    handleItemCurrentlyOnSaleChange = {this.handleItemCurrentlyOnSaleChange}
                />
            </div>
        );
    }
}

export default Header;