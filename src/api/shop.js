import _productExamples from './products.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_productExamples), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT)
}
