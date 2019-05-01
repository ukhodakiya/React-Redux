import React, { Component } from 'react';
import Products  from './Products';
import Create from './Create'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import '../App.css';
import PageNotFound from "./PageNotFound";
import Navigation from './Navigation'
import Detail from "./Detail";
import PrivateRoute from './PrivateRoute'

class App extends Component {



    // deleteProducts = (productKey) => {
    //     // alert("Product key = " +productKey)
    //     this.setState((prevState) =>{
    //         return{
    //             products : prevState.products.filter((item,index) => {
    //                 return index !== productKey
    //             })
    //
    //         }
    //     })
    // }
    //
    //
    // createProducts =(product) =>{
    //     this.setState((prevState) =>{
    //         return {
    //             products: [
    //                     ...prevState.products,
    //                     product
    //             ]
    //         }
    //     })
    // }
  render() {

      return (
        <div className="container">
            {/*product={this.state.products}*/}
            <Navigation/>
             <Switch>
            <Route path="/" component={Home} exact={true}/>
                 <PrivateRoute path="/products/:productCode" component={Detail} exact={true}/>
            <PrivateRoute path="/products" render={()=>{
            return <Products />
            }} />
                 {/*deleteProducts={this.deleteProducts}
                 createProducts={this.createProducts}*/}
            <PrivateRoute path="/create" render={() => {
                return <Create  />
            }}/>


            <Route  component={PageNotFound}/>
             </Switch>
            {/*<Home/>*/}
            {/*<Products product={this.state.products} deleteProducts={this.deleteProducts}/>*/}
            {/*<Create createProducts={this.createProducts}/>*/}
        </div>

    );
  }
}

export default App;
