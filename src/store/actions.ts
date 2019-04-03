import {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  PATCH_DATA,
  DELETE_DATA,
} from './constants';

const getData = {
  type: GET_DATA,
};

const postData = (payload: any) => ({
  type: POST_DATA,
  payload,
});

const putData = {
  type: PUT_DATA,
};

const patchData = {
  type: PATCH_DATA,
};

const deleteData = {
  type: DELETE_DATA,
};

export { getData, postData, putData, patchData, deleteData };
