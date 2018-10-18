import * as React from 'react';
import { Product } from '../utils/utils';
import { Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './StartPage.css';

interface State {
    productlist: Product[];
}

export class StartPage extends React.Component<{}, State> {

    public render () {
        return (
            <Card className="start-page">
                <h2>Willkommen im neuen Onlineshop von MediaMarktSaturn</h2>
                <p>In diesem Store findet jedermann alles, was sein Herz begehrt. Von Fernsehern zu Katzen ist alles geboten.</p>
                <p>Viel Spaß beim durchstöbern und vielleicht ist ja das richtige auch für Sie dabei!</p>
                <Button variant="extendedFab"><Link to="/products">Zum Shop</Link></Button>
                <Button variant="extendedFab"><Link to="/cats">Zum Fun Shop</Link></Button>

            </Card>
        )
    }
}