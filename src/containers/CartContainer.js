import React from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ addedProducts, total, checkout }) => (
  <Cart
    products={addedProducts}
    cartTotal={total}
    onCheckoutClicked={() => checkout(addedProducts)}
  />
)

const mapStateToProps = state => ({
  addedProducts: getCartProducts(state),
  total: getTotal(state)
})

export default connect(mapStateToProps, { checkout })(CartContainer)
