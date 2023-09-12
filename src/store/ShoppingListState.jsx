const initialState = {
    showCart:false,
    items:[],
    count:0
}
export default (state = initialState, action)=>{
    const {type,payload}= action;
    switch(type){
        case 'add':
            let itemsList
            if(state.items.find(item=>item.name == payload.name)){
                 itemsList = state.items.map(item=>{
                    if(item.name==payload.name){
                        return {...item,count:item.count+1}
                    }else{return item}
                })   
            }else {itemsList =[...state.items,{...payload,count:1}]}
            return{
                showCart:state.showCart,
                items:itemsList,
                count:state.count+1,
            }
        case 'remove':
            const shoppingList = state.items.filter((item)=> item.name!==payload.name)
            return{
                showCart:state.showCart,
                items:shoppingList,
                count:state.count-payload.count,
            }
        case 'changeShowCart':
            return{
                showCart:!state.showCart,
                items:state.items,
                count:state.count,
            }
        case 'addToSpecific':
            const list = state.items.map(item=>{
                if(item.name==payload.name){
                    return {...item,count:item.count+1}
                }else{return item}})
            return{
            showCart:state.showCart,
            items:list,
            count:state.count,
            }
        case 'removeFromSpecific':
            let itemlist
            if(payload.count == 1){
                itemlist = state.items.filter((item)=> item.name!==payload.name)
            }
            else{
            itemlist = state.items.map(item=>{
                if(item.name==payload.name){
                    return {...item,count:item.count-1}
                }else{return item}})}
            return{
            showCart:state.showCart,
            items:itemlist,
            count:state.count,
            }
        
        default:
            return state
    }
}
export const add = (item)=>{
    return{
        type:'add',
        payload:item
    }
}
export const remove = (item)=>{
    return{
        type:'remove',
        payload:item
    }
}
export const changeShowCart = (payload)=>{
    return{
        type:'changeShowCart',
    }
}
export const addToSpecific = (payload)=>{
    return{
        type:'addToSpecific',
        payload:payload
    }
}
export const removeFromSpecific = (payload)=>{
    return{
        type:'removeFromSpecific',
        payload:payload
    }
}