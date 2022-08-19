import { configureStore } from "@reduxjs/toolkit"
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

const store = configureStore({
  reducer: {
    books: bookReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
