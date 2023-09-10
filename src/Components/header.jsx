import React from 'react'
import { connect } from 'react-redux'
import { select } from'../store/state'
import ProfilHeaderIcon from './profileHeaderIcon'

function Header(props) {

  return (
    <header>
        <h2>Our Website</h2>
        <div className='navbar'>
        {props.categories.categories.map((category,idx)=>{
            return <h4 onClick={()=>props.select(idx)} key={idx}>{category.category}</h4>
        })}
        </div>
        {/* <ProfilHeaderIcon/> */}
    </header>
  )
}
const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = { select };
export default connect(mapStateToProps,mapDispatchToProps)(Header);
