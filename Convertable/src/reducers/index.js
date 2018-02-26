import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import { navigationReducer } from '../AppNavigation';
import categoriesReducer from './categoriesReducer';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  categoryId: categoryReducer,
  categories: categoriesReducer,
  nav : navigationReducer
});