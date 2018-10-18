import fetch from 'node-fetch';
import * as React from 'react';
import {ProductList} from "../product-list/ProductList";
import {Product, ProductRaw} from "../utils/utils";
import './ProductPage.css';


interface State {
    products: Product[],
    filteredProducts: Product[],
    url: string
}



export class ProductPage extends React.Component<any,State> {

    public state = {
        products: [],
        filteredProducts: [],
        url: '/products'
    };

    public componentDidMount() {
        this.setState({url: this.props.match.url})
        this.getDataFromServer(this.props.match.url);
    }

    public componentDidUpdate(props:any){
        console.log(props.match.url === this.state.url);
    }

    public render () {
        return (
            <div className="wrapper-product-page">
                <label className='filter'>
                    Filter:
                    <input className='input-field' type="text" name="name" onChange={this.filterProducts}/>

                </label>

                <ProductList products={this.state.filteredProducts} url={this.state.url}/>
            </div>
        );
    }

    private filterProducts = (e : React.FormEvent<HTMLInputElement>) => {
        const filterString = e.currentTarget.value;
        const newProducts = this.state.products.filter((product : Product) => {
            return product.name.toLowerCase().includes(filterString.toLowerCase());
        });
        this.setState({filteredProducts: newProducts})
    }

    private async getDataFromServer(dataUrl:string) {
        const res = await fetch(`http://localhost:4000${dataUrl}`);
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
}