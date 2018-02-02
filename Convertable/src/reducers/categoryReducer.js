import { categories } from '../database.json';
import { CHANGE_CATEGORY } from '../actions/types';

export default categoryReducer = (state = 0, action) =>
  action.type === CHANGE_CATEGORY
    ? action.payload
    : state
