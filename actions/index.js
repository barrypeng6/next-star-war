export const getPagesRequestAction = () => ({
  type: 'GET_PAGES_REQUEST'
})

export const getPagesSuccessAction = (data) => ({
  type: 'GET_PAGES_SUCCESS',
  payload: data
})

export const getPagesFailureAction = () => ({
  type: 'GET_PAGES_FAILURE'
})