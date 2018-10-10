import * as React from 'react';
import {Product} from "../utils/utils";
import './ProductList.css';


interface Props {
    products: Product[],
    showProduct: (index:number) => void,
    hideProduct: (index:number) => void
}



export class ProductList extends React.Component<Props>{

    constructor(props:Props) {
        super(props);

    }

    public render () {
        return (
          <div>
              {this.showProductList()}
          </div>
        );
    }


    private showProductList() {
        const $this = this;
        if (!!this.props.products) {
            return (this.props.products.map((product) => (
                <div key={product.number} onMouseEnter={() => $this.props.showProduct(product.number)} onMouseLeave={() => $this.props.hideProduct(product.number)}>
                    <div className="product-list-row" >
                        <span className="product-number">{product.number}</span>
                        <img className="product-image" src={product.image}/>
                        <span className="product-name">{product.name}</span>
                        <span className="product-description">{product.description}</span>
                        <span className="product-price">{product.price}</span>
                    </div>
                    <hr/>
                </div>
            )))
        }
        return null;
    }


}