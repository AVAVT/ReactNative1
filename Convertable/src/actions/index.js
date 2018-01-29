import { CHANGE_BASE_VALUE } from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});