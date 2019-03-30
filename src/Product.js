import React, { Component } from 'react';

class Product extends Component{

    constructor(product){
            this.product = product;
    }

    render(){

        return(

            <div>
              <div>
              <img src={product.image} alt={product.name} />
              </div>
              <div>
                  <span className="product_price">{product.price}</span>
                    <span className="product_name">{product.name}</span>
                    <p>{product.description}</p>

              </div>
            </div>
        );
    }
}

export default Product;

