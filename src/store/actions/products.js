export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FETCH_PRODUCTS  = "FETCH_PRODUCTS";



export const deleteProduct = (productCode) => {
    return {
        type: DELETE_PRODUCT,
        productCode
    }
}

export const addProduct = (products) => {
    return {
        type: ADD_PRODUCT,
        products
    }
}



export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/products')
            .then((data) => data.json())
            .then((data) => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    data
                });
            });
    }
    };





