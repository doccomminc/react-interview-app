import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedProductIds: [],
  quantityByProductID: {}
}

const addedIds = (state = initialState.addedProductIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.productId]
    default:
      return state
  }
}

const quantityByProductID = (
  state = initialState.quantityByProductID,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state, [productId]: (state[productId] || 0) + 1 }
    default:
      return state
  }
}

export const getOverallQuantity = (state, productId) =>
  state.quantityByProductID[productId] || 0

export const getAddedProductIds = state => state.addedProductIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedProductIds: addedIds(state.addedProductIds, action),
        quantityByProductID: quantityByProductID(
          state.quantityByProductID,
          action
        )
      }
  }
}

export default cart
