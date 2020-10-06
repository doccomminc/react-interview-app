import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ addedProducts, addToCart }) => (
  <ProductsList title="Products">
    {addedProducts.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </ProductsList>
)

const mapStateToProps = state => ({
  addedProducts: getVisibleProducts(state.products)
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer)
