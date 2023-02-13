import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import tabbarReducer from './storeSlice/tabbar'
// import { docsApi } from '../services/docs'

export const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(docsApi.middleware),
  reducer: {
    tabbar: tabbarReducer,
    // [docsApi.reducerPath]: docsApi.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
