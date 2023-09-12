import React from 'react'
import { connect } from 'react-redux'
import Product from './product'

function Main(props) {
  const backgroundStyle = {
    backgroundImage: `url(${props.categories.selectedCategory.pic})`,
  };
  return (
    <main>
      <h2 style={backgroundStyle}>{props.categories.selectedCategory.category}</h2>
      <div className='cards'>
      {
        props.categories.selectedCategory.products.map((product,idx)=>{
          return <Product product={product} key={idx}/>
        })
      }
      </div>
    </main>
  )
}
const mapStateToProps = (state) => ({
  categories: state.categories
})
export default connect(mapStateToProps)(Main);
