import { categories } from '../database.json';
import { CURRENCY_REQUEST_SUCCESS } from '../actions/types';

const parseAPIData = data => data;

export default categoriesReducer = (state = categories, action) =>
  action.type === CURRENCY_REQUEST_SUCCESS
    ? [...categories, parseAPIData(action.payload)]
    : categories;