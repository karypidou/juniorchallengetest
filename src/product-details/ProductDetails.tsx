import * as React from 'react';
import { Product } from "../utils/utils";
import { Card, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./ProductDetails.css";


interface Props {
    product?: Product,
    match?: any
}

interface State {
    product: Product,
    prevUrl: string
}

export class ProductDetails extends React.Component<Props, State> {
    public state = {
        product: {
            number: 0,
            name: '',
            description: '',
            price: '',
            image: ''
        },
        prevUrl: '/products'
    }

    public async componentDidMount() {
        const url = this.props.match.url;
        let prevUrl = '/products';
        if (this.props.match.url.startsWith('/cats')) {
            prevUrl = '/cats'
        }
        const link = `http://localhost:4000${url}`;
        const data = await fetch(link);
        const json = await data.json();
        const product = {
            number: json.id,
            name: json.name,
            description: json.description,
            price: json.price,
            image: json.image
        }
         this.setState({product, prevUrl});
    }
    public render() {
        return (
            <div>
                <Button variant='extendedFab' className="to-products-btn"><Link to={this.state.prevUrl}>Zurück</Link></Button>
                <Card className="product-details-card">
                    <div className="product-details-data">
                        <div className="product-details-row"><span className="product-details-name">Artikelnummer: </span><span className="product-details-value">{this.state.product.number}</span></div>
                        <div className="product-details-row"><span className="product-details-name">Artikelname: </span><span className="product-details-value">{this.state.product.name}</span></div>
                        <div className="product-details-row"><span className="product-details-name">Beschreibung: </span><span className="product-details-value">{this.state.product.description}</span></div>
                        <div className="product-details-row"><span className="product-details-name">Preis: </span><span className="product-details-value">{this.state.product.price}</span></div>
                    </div>
                    <img className="product-details-image" src={this.state.product.image} />
                </Card>
            </div>
        )

    }
};