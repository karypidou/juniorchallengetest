import * as React from 'react';
import {Product} from "../utils/utils";


interface Props {
    product: Product
}

export  const ProductDetails : React.SFC<Props> = (props) : any => {
    const product = props.product;
    return(
            <div>
                <span>{product.name}</span>
                <img src={product.image}/>
            </div>
        )
};