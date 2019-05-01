import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import productsReducer from './reducers/products'
import UserReducer from './reducers/users'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
   products: productsReducer,
   users: UserReducer
});

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);




export default store;