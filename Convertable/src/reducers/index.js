import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import { navigationReducer } from '../AppNavigation';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  categoryId: categoryReducer,
  nav : navigationReducer
});