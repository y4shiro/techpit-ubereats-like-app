import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  foodsList: [],
};

export const foodsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export const foodsReducer = (state: any, action: any) => {
  switch (action.type) {
    case foodsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case foodsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        foodsList: action.payload.foods,
      };
    default:
      throw new Error();
  }
};
