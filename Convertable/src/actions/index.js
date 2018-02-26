import {
  CHANGE_BASE_VALUE,
  CHANGE_CATEGORY,
  CURRENCY_REQUEST_LOADING,
  CURRENCY_REQUEST_SUCCESS,
  CURRENCY_REQUEST_ERROR
} from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const createChangeCategoryAction = newId => ({
  type: CHANGE_CATEGORY,
  payload: newId
});

const currencyLoadingAction = () => ({
  type: CURRENCY_REQUEST_LOADING
});

const currencySuccessAction = (data) => ({
  type: CURRENCY_REQUEST_SUCCESS,
  payload: data
});

const currencyErrorAction = (err) => ({
  type: CURRENCY_REQUEST_ERROR,
  payload: err
});

export const currencyRequestAction = () => async dispatch => {
  dispatch(currencyLoadingAction());
  try {
    const result = await fetch('http://www.apilayer.net/api/live?access_key=84bb05eef085d9d5761b263850bafea2')
    const data = await result.json();
    dispatch(currencySuccessAction(data));
  }
  catch (err) {
    console.error(err);
    dispatch(currencyErrorAction(err));
  }
}