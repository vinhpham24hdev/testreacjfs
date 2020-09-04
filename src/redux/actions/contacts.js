import axios from 'axios';
import * as types from '../constants';
import callApi from '../../callApi';

const allContacts = {
  method: "get",
  url: "https://api.dev.pastorsline.com/api/contacts.json?companyId=171",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk",
  },
};

export const getAllContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_ALL_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi('companyId=171', params)
    .then((response) => {
      resolve(response.data);
      dispatch({
        payload: {
          data: response.data,
        },
        type: types.GET_ALL_CONTACTS_SUCCED,
      });
    })
    .catch((error) => {
      dispatch({
        payload: {
          error,
        },
        type: types.GET_ALL_CONTACTS_FAILD,
      });
    });
};

const usContacts = {
  method: "get",
  url: "https://api.dev.pastorsline.com/api/contacts.json?companyId=171&countryId=226",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk",
  },
};

export const getUsContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_US_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi('companyId=171&countryId=226',params)
    .then((response) => {
      resolve(response.data);
      dispatch({
        payload: {
          data: response.data,
        },
        type: types.GET_US_CONTACTS_SUCCED,
      });
    })
    .catch((error) => {
      dispatch({
        payload: {
          error,
        },
        type: types.GET_US_CONTACTS_FAILD,
      });
    });
};
