import * as types from './actionTypes';

export const setTitleExample = (value: string) => {
  return {
    type: types.MAIN_EXAMPLE,
    payload: value
  }
}
