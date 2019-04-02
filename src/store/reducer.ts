import {
  GET_DATA,
  GET_DATA_SUCCESS,
  POST_DATA,
  PUT_DATA,
  PATCH_DATA,
  DELETE_DATA,
} from './constants';

const rootReducer = (state = { data: [] }, action: any) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
