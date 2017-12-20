const initialState = {
  menuList: [],
  storeList: [],
  colorList: [],
  activityList:[],
  storeAppList: [],
  pageList: [],
  cartList: [],
  userList: [],
  memberGroupList: [],
  isLogin: false,
  appLoginList: [],
  loading: false
}
const settingReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case 'GET_SETTING_REQUEST':
      return {
        menuList: [],
        storeList: [],
        colorList: [],
        activityList:[],
        storeAppList: [],
        pageList: [],
        cartList: [],
        userList: [],
        memberGroupList: [],
        isLogin: false,
        appLoginList: [],
        loading: true
      }
    case 'GET_SETTING_SUCCESS':
      return {
        menuList: action.payload.data.getMenuList.data,
        storeList: action.payload.data.getStoreList.data,
        colorList: action.payload.data.getColorList.data,
        activityList:action.payload.data.getActivityList.data,
        storeAppList: action.payload.data.getStoreAppList.data,
        pageList: action.payload.data.getPageList.data,
        cartList: action.payload.data.getCartList.data,
        userList: action.payload.data.getUserList.data,
        memberGroupList: action.payload.data.getMemberGroupList.data,
        isLogin: action.payload.data.isLogin.isLogin,
        appLoginList: action.payload.data.getAppLoginList.data,
        loading: false
      }
    case 'GET_SETTING_FAILURE':
      return {
        menuList: [],
        storeList: [],
        colorList: [],
        activityList:[],
        storeAppList: [],
        pageList: [],
        cartList: [],
        userList: [],
        memberGroupList: [],
        isLogin: false,
        appLoginList: [],
        loading: false,
        error: 'error'
      }
    default:
      return state
  }
}

export default settingReducer