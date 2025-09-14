import { combineReducers } from 'redux'
import { usersReducer } from './Slices'

export const rootReducer = combineReducers({
	user: usersReducer,
})
