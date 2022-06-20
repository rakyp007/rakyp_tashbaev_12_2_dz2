import { types } from "../types"

const initializeState = {
	users: [],
	name: '',
}



export const titleReducer = (state = initializeState, action) => {
	switch (action.type) {
		case types.CREATE_USER:
			return { ...state, users: [...state, action.payload] }
		case types.ADD_NAME:
			return { ...state, name: action.payload }
		case types.CLEAR_NAME:
			return { ...state, name: null }
		default:
			return state
	}
}


