import React from 'react'

const Product = ({ quantity, title }) => (
  <div>
    {title} - {quantity ? ` x ${quantity}` : null}
  </div>
)

export default Product
