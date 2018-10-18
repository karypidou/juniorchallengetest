import * as React from 'react';
import {Product} from "../utils/utils";
import './ProductList.css';
import { Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


interface Props {
    products: Product[];
    url: string;
}


export class ProductList extends React.Component<Props>{


    public render () {
        return (
          <div className="wrapper-product-list" >
              {this.showProductList()}
          </div>
        );
    }


    private showProductList() {
        if (!!this.props.products) {
            return (this.props.products.map((product) => (
                <div key={product.number}>
                    <Card className="product-list-item" >
                        <img className="product-image" src={product.image}/>
                        <div className="product-details">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">{product.price.replace(" Euro", "€")}</span>
                        </div>
                        <Button variant="extendedFab" className="to-product-btn"><Link to={`${this.props.url}/${product.number}`}>Zum Product</Link></Button>

                    </Card>
                </div>
            )))
        }
        return null;
    }


}