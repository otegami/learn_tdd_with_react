import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import bookReducer, { initState } from "./bookReducer"

const middlewares = [thunk]

const composeEnhancers = compose(applyMiddleware(...middlewares))
const bookStore = createStore(
  bookReducer,
  initState,
  composeEnhancers
)

export default bookStore
