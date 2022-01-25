import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

type initialStateType = {
  fetchState:
    | typeof REQUEST_STATE.INITIAL
    | typeof REQUEST_STATE.LOADING
    | typeof REQUEST_STATE.OK;
  restaurantsList: [];
};

export const restaurantsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
} as const;

type actionType = {
  type:
    | typeof restaurantsActionTyps.FETCHING
    | typeof restaurantsActionTyps.FETCH_SUCCESS;
  payload: any;
};

export const restaurantsReducer = (
  state: initialStateType,
  action: actionType
) => {
  switch (action.type) {
    case restaurantsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
};
