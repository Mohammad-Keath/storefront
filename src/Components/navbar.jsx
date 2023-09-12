import React from 'react'
import { connect } from 'react-redux'
import { select } from'../store/Categories'
function Navbar(props) {
  return (
    <div className='navbar'>
        {props.categories.categories.map((category,idx)=>{
          return <h4 onClick={()=>props.select(idx)} key={idx}>{category.category}</h4>
        })}
    </div>
  )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = { select };
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);