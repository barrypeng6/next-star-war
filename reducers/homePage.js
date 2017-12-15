const initialState = {
  loading: false,
  pages: []
}
const homePageReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'GET_PAGES_REQ':
      return {
        loading: true,
        pages: []
      }
    case 'GET_PAGES_SUCCESS':
      return {
        loading: false,
        pages: [...state.pages, action.payload]
      }
    case 'GET_PAGES_FAILURE':
      return {
        loading: false,
        error: 'error'
      }
    default:
      return state
  }
}

export default homePageReducer