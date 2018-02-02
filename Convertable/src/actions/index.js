import { CHANGE_BASE_VALUE, CHANGE_CATEGORY } from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const createChangeCategoryAction = newId => ({
  type: CHANGE_CATEGORY,
  payload: newId
});