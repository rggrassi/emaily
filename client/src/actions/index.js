import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from './types'

export const fetchUser = () =>  async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = (token) =>  async (dispatch) => {
    const res = await axios.post('/api/stripe', token)
    dispatch({ type: FETCH_USER, payload: res.data })
}

/*export const submitSurvey = values => async dispatch => {
    const res = await axios.post('/api/surveys', values)
    dispatch({ type: FETCH_USER, payload: res.data })
}*/

export function submitSurvey(values, history)  {
    return async function(dispatch) {
        const res = await axios.post('/api/surveys', values)

        history.push('/surveys')
        dispatch({ type: FETCH_USER, payload: res.data })
    }
}

export function fetchSurveys() {
    return async function(dispatch) {
        const res = await axios.get('/api/surveys')

        dispatch({ type: FETCH_SURVEYS, payload: res.data })
    }
}