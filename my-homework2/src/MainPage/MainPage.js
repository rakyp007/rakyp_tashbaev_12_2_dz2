import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addNameAction, clearNameAction, createUserAction, } from '../store/action'
import { types } from '../types'

function MainPage() {
	const name = useSelector(state => state.name.name)
	const dispatch = useDispatch()

	const creatUser = () => {
		dispatch(createUserAction(name))
		dispatch(clearNameAction(' '))
	}

	const onchangInput = (e) => {
		dispatch(addNameAction(e.target.value))
	}

	return (
		<div>
			<input type='text' onChange={onchangInput} value={name} />
			<button onClick={creatUser}> </button>
			<lu>
				{name.map((user, key) => {
					;<li key={key}>{user}</li>
				})}
			</lu>
		</div>
	)
}

export default MainPage


