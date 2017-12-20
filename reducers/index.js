import { combineReducers } from 'redux';
import homePage from './homePage';
import settingReducer from './settings'

const rootReducer = combineReducers({
  homePage,
  settingReducer
});

export default rootReducer;