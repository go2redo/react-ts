import {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  PATCH_DATA,
  DELETE_DATA,
} from './constants';

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = {
  type: GET_DATA,
};

const postData = {
  type: POST_DATA,
};

const putData = {
  type: PUT_DATA,
};

const patchData = {
  type: PATCH_DATA,
};

const deleteData = {
  type: DELETE_DATA,
};

export default {
  getData,
  postData,
  putData,
  patchData,
  deleteData,
};
