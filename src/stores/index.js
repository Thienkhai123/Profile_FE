import { configureStore } from '@reduxjs/toolkit'
import auth from './apps/authSlice'
import product from './apps/productSlice'
import logger from 'redux-logger'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`)
  const logger = createLogger({
    collapsed: (logEntry) => !logEntry.error
  })

  middlewares.push(logger)
}

export const store = configureStore({
  reducer: {
    auth: auth,
    product: product
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development'
})
