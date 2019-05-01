import {ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS} from "../actions/products";

const initialAppState = [];

const productReducer = (state=initialAppState,action) =>{
    // console.log(action);
    switch(action.type){

        case DELETE_PRODUCT:
            return state.filter((item) => {
                return item.productCode !==  action.productCode;
            });
            break;

        case ADD_PRODUCT:
             var arr = [
                 ...state,
                 action.products
             ];
            return arr;
         break;
        case FETCH_PRODUCTS:

            return [...action.data,...state];

         break;

        default:
            return state;

    }

}

export default productReducer;