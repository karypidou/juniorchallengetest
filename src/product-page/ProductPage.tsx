import fetch from 'node-fetch';
import * as React from 'react';
import {ProductList} from "../product-list/ProductList";
import {Product, ProductRaw} from "../utils/utils";
import {ProductDetails} from "../product-details/ProductDetails";


interface State {
    products: Product[],
    filteredProducts: Product[],
    currentProduct?: Product
}



export class ProductPage extends React.Component<any,State> {

    constructor(props:any) {
        super(props);
        this.getDataFromServer();
        this.state = {
            products: [],
            filteredProducts: [],
        };
        this.filterProducts = this.filterProducts.bind(this);
        this.showProduct = this.showProduct.bind(this);
        this.hideProduct = this.hideProduct.bind(this);
    }

    public render () {
        return (
            <div>
                <label>
                    Filter:
                    <input type="text" name="name" onChange={this.filterProducts}/>
                </label>
                <ProductList products={this.state.filteredProducts} showProduct={this.showProduct} hideProduct={this.hideProduct}/>
                {!!this.state.currentProduct ? (<ProductDetails product={this.state.currentProduct}/>) : null}
            </div>
        );
    }

    private filterProducts(e : React.FormEvent<HTMLInputElement>) {
        const filterString = e.currentTarget.value;
        const newProducts = this.state.products.filter((product) => {

            return product.name.toLowerCase().includes(filterString.toLowerCase());

        });
        this.setState({filteredProducts: newProducts})
    }

    private async getDataFromServer() {
        const res = await fetch("http://localhost:4000/products");
        const json = await res.json();
        const products:Product[] = [];
        json.map((product: ProductRaw) => {
            products.push({
                number: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image
            })
        });
        this.setState({products, filteredProducts: products});
    }

    private showProduct(index:number) {
        const currentProduct = this.state.filteredProducts.find((product) => product.number === index);
        this.setState({
            currentProduct
        });
    }

    private hideProduct(index:number) {
        const currentProduct = this.state.filteredProducts.find((product) => product.number === index);
        if (!!this.state.currentProduct && !!currentProduct && this.state.currentProduct.number === currentProduct.number) {
            this.setState({currentProduct: undefined})
        }
    }
}