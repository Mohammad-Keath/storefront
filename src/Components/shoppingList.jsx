import React from 'react'
import { connect } from 'react-redux'
import { remove,changeShowCart,removeFromSpecific,addToSpecific} from '../store/ShoppingListState'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';



function ShoppingList(props) {
  
  return (
    
      <div id='shoppingList' >
  {props.ShoppingListState.showCart &&
          <List>
          {props.ShoppingListState.items.map((item)=>{
            return(
            <ListItem>
              <ListItemAvatar>
                <Avatar src={item.photo}/>
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.description} />
              <AddCircleIcon onClick={()=>props.addToSpecific(item)}/>&nbsp;
              <div className='number'>
              <h2>{item.count}</h2>
              </div>&nbsp;
              <RemoveCircleIcon onClick={()=>props.removeFromSpecific(item)}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DeleteIcon onClick={()=>props.remove(item)}/>
            </ListItem>
            )
          })}
          </List>
        }
        </div>
        
  )
}
const mapStateToProps = (state)=>({
  ShoppingListState:state.ShoppingListState
})
const mapDispatchToProps= {remove,changeShowCart,removeFromSpecific,addToSpecific}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);
