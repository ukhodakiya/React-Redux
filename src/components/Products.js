import React,{Component} from 'react';
import Panelbox from './Panelbox'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProduct, fetchProducts} from "../store/actions/products";

class Products extends Component{

    state = {
        loadimage: false
    }

    toggleImage = () => {
        this.setState((prevState) =>{
           return {
               loadimage: !prevState.loadimage
           }
        });
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    deleteProducts = (productCode) =>{
        // this.props.deleteProducts(productKey);
        this.props.dispatch(deleteProduct(productCode));
    }

    render()
{
    const content = (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>
                    <button className="btn btn-primary" onClick={this.toggleImage}>
                        {
                            this.state.loadimage ? "Hide Image" : "Show Image"
                        }
                    </button>
                </th>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Price</th>
                <th>Release</th>
                <th>Rating</th>
            </tr>
            </thead>

            <tbody>
            {
                this.props.product && this.props.product.map((item, index) => (
                    <tr key={index}>
                        <td>
                            { this.state.loadimage &&<img  alt="logo" src={item.imageUrl} style={styles.image}/>}
                        </td>

                        <td>
                            <Link to={"/products/" +item.productCode}>{item.productName}</Link>
                        </td>
                        <td>{item.productCode}</td>
                        <td>{item.price}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.starRating}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => {this.deleteProducts(item.productCode)}}>Remove</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    )
        return <Panelbox heading="Products" content={content}/>
    }
}

const styles = {
        image:{
            width:"50px"
        }
}

function mapStateToProps(store){
            return {
                product: store.products,
                users:  store.users
            }
}

export default connect(mapStateToProps)(Products);