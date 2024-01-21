import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './SliceModalFilter'
import sliceCountBuscetReducer from './sliceCountBuscet'
import sliceCounterLikesReducer from './sliceCountLikes'
import sliceSwitchPagesReducer from './sliceSwitchPages'
import sliceSwitchFilterPriceReducer from './SliceFilter'
import switchTeamSliceReducer from './SliceTeam'
import switchSliderReducer from './sliceSlider'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countBuscket: sliceCountBuscetReducer,
    countLikes: sliceCounterLikesReducer,
    switchPages:sliceSwitchPagesReducer,
    switchFilterPrice: sliceSwitchFilterPriceReducer,
    switchTeamSlice: switchTeamSliceReducer,
    switchSlider:switchSliderReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch