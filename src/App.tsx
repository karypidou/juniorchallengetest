import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { ProductPage } from "./product-page/ProductPage";
import Sidebar from 'react-sidebar';
import Home from '@material-ui/icons/Home';
import { Switch, Route } from 'react-router';
import { StartPage } from './start-page/StartPage';
import { Link } from 'react-router-dom';
import { ListItem, List, ListItemText, Button } from '@material-ui/core';
import { ProductDetails } from './product-details/ProductDetails';

interface State {
  sidebarOpen: boolean;
}


class App extends React.Component<{}, State> {

  public state = {
    sidebarOpen: false
  };

  public render() {
    return (
      <div className="App">

        <Sidebar
          sidebar={
            <List>
              <ListItem>
                <img src={logo} className="App-logo" alt="logo" width="100%" />
              </ListItem>

              <ListItem onClick={this.onSetSidebarOpen}>
                <Button variant="extendedFab"><Link to="/"><ListItemText primary="Home" /></Link></Button>
              </ListItem>
              <ListItem onClick={this.onSetSidebarOpen}>
                <Button variant="extendedFab"><Link to="/products"><ListItemText primary="Products" secondary="Normal Version" /></Link></Button>
              </ListItem>
              <ListItem onClick={this.onSetSidebarOpen}>
                <Button variant="extendedFab"><Link to="/cats"><ListItemText primary="Products" secondary="Fun Version" /></Link></Button>
              </ListItem>
            </List>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "darkgrey", width: "15%" } }
          }
        >
          <header className="App-header"><Link to='/'>
            <Home className="side-bar-button"/></Link>
            <h1 className="App-title">MediaMarktSaturn Frontend Store</h1>
          </header>
          <Switch>
            <Route exact path='/' component={StartPage} />
            <Route path='/products/:id' component={ProductDetails}/>
            <Route path='/products' component={ProductPage} />
            <Route path='/cats/:id' component={ProductDetails} />
            <Route path='/cats' component={ProductPage} />
          </Switch>

        </Sidebar>

      </div>

    );
  }

  private onSetSidebarOpen = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

}

export default App;

