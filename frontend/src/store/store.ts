import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER } from 'redux-persist'
import userReducer from './slice/userSlice'
import {api} from './api'
import { Pause } from 'lucide-react'
import { set } from 'react-hook-form'

//persist configuration for user
const userPersistConfig = { key: 'user', storage, whiteList: ['user', 'isEmailVerified', 'isLoggedIn'] }

//wrap reducers with `persist config`
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)
// export const store = configureStore({
//     reducer: {
//         [api.reducerPath]: api.reducer,  //rtk query api
//         user: persistedUserReducer
    
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//             },
//         }).concat(api.middleware)

// });

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // RTK Query API Reducer
        user: persistedUserReducer, // Persisted User Reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] as unknown as boolean,
            },
        }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch






