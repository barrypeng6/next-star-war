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

export const getSettingRequestAction = () => ({
  type: 'GET_SETTING_REQUEST'
})

export const getSettingSuccessAction = (data) => ({
  type: 'GET_SETTING_SUCCESS',
  payload: data
})

export const getSettingFailureAction = () => ({
  type: 'GET_SETTING_FAILURE'
})