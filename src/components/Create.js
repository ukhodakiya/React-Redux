import React, {Component} from 'react';
import Panelbox from './Panelbox'
import {withRouter} from 'react-router-dom'
import {addProduct} from "../store/actions/products";
import serializeForm from 'form-serialize'
import {connect} from 'react-redux';

class Create extends Component{

    state = {
        products:{
            productName:"",
            productCode:"",
            price:"",
            releaseDate:"",
            starRating:""
        }
    }


    createProducts = (event) =>{
        event.preventDefault();
        var userObj = serializeForm(event.target, {hash:true});
        // console.log(serializeForm(event.target, {hash:true}));
        this.props.dispatch(addProduct(userObj));



        //this.state.producta
        this.props.history.push("/products");

        // this.props.createProducts(this.state.products);
        // console.log(this.state.products);
    }

    productsChangeHandler = (event) =>{
        this.setState((prevState) => {
            return {
                products: {
                    ...prevState.products,
                    [event.target.name]: event.target.value
                }
            }
        });
        event.persist();

    }

    render(){


        const content = (
            <form onSubmit={this.createProducts}>
                {
                    JSON.stringify(this.state)
                }
                <div className="form-group">
                    <label className="control-label">Product Name</label>
                    <input type="text" value={this.state.products.productName}
                           placeholder="Product Name" name="productName"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Product Code</label>
                    <input type="text" value={this.state.products.productCode}
                           placeholder="Product Code" name="productCode"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>


                <div className="form-group">
                    <label className="control-label">Price</label>
                    <input type="text" value={this.state.products.price}
                           placeholder="Price" name="price"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>



                <div className="form-group">
                    <label className="control-label">Release</label>
                    <input type="text" value={this.state.products.releaseDate}
                           placeholder="Release" name="releaseDate"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>


                <div className="form-group">
                    <label className="control-label">Rating</label>
                    <input type="text" value={this.state.products.starRating}
                           placeholder="Rating" name="starRating"
                           onChange={this.productsChangeHandler} className="form-control"/>
                </div>

                <button className="btn btn-success">Create</button>
                {/*onClick={this.createProducts}*/}
            </form>


        )
        return  <Panelbox heading="Create" content={content}/>

    }
}

export default connect(null)(withRouter(Create));