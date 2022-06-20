import { createStore, combineReducers } from 'redux'
import { types } from '../types'
import { titleReducer } from './titleReducer'


const rootReducer = combineReducers({
	name: titleReducer,
})

export const store = createStore(rootReducer)


