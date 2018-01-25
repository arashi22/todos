import axios from 'axios'
import { API_URL } from '../config';
export const FETCH = Symbol('fetch action')

export const axiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default ({ dispatch }) => next => (action) => {
  const fetchConfig = action[FETCH]

  if (fetchConfig === undefined) {
    return next(action)
  }

  delete action[FETCH] // eslint-disable-line no-param-reassign
  dispatch({ ...action, status: 'start' })

  const { method = 'GET', data, url, ...restConfig } = fetchConfig
  const requestData = method !== 'GET' ? data : {}
  const apiUrl = `${API_URL}${url}`

  const config = {
    url: apiUrl,
    options: {
      method,
      data: requestData,
      ...restConfig,
    }
  }
  return next(Object.assign({}, { ...action, ...config }))
};
