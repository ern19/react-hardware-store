import React, { Component } from 'react';
import Header from "./Header"

class EditSaleItem extends Component {
    render() {
        return (
            <div>
                <div>   
                    {this.props.editSaleItem ? <input type="text" 
                        placeholder={this.props.itemCurrentlyOnSale} 
                        onChange={this.props.handleItemCurrentlyOnSaleChange} 
                        /> 
                    : null}
                </div>

                <button onClick={this.props.toggleEditSaleItem}>
                    {this.props.editSaleItem ? "Hide" : "Edit Sale Item"}
                </button>
            </div>
        );
    }
}

export default EditSaleItem;