import {combineReducers,createStore} from 'redux'
import categories from './state'

let reducers = combineReducers({
    categories:categories,
})

const store = ()=>{
    return createStore(reducers)
}
export default store();