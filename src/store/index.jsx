import {combineReducers,createStore} from 'redux'
import categories from './Categories'
import ShoppingListState from './ShoppingListState'

let reducers = combineReducers({
    categories:categories,
    ShoppingListState:ShoppingListState
})

const store = ()=>{
    return createStore(reducers)
}
export default store();