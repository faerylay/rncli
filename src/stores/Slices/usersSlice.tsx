import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
}

export const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload
		},
		logoutUser: state => {
			state.user = null
		},
	},
})
export const { setUserData, logoutUser } = usersSlice.actions

export default usersSlice.reducer
