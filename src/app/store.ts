import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { githubReducer } from './github/github.slice'
// ...

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch