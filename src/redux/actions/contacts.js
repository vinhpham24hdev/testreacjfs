import axios from "axios";
import * as types from "../constants";
import callApi from "../../callApi";

export const getAllContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_ALL_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi("companyId=171", params)
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

export const getUsContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_US_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi("companyId=171&countryId=226", params)
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

export const getMoreAllContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_MORE_ALL_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi("companyId=171", params)
    .then((response) => {
      resolve(response.data);
      dispatch({
        payload: {
          data: response.data,
        },
        type: types.GET_MORE_ALL_CONTACTS_SUCCED,
      });
    })
    .catch((error) => {
      dispatch({
        payload: {
          error,
        },
        type: types.GET_MORE_ALL_CONTACTS_FAILD,
      });
    });
};

export const getMoreUsContacts = (params = {}, resolve = () => {}) => (
  dispatch
) => {
  dispatch({
    type: types.GET_MORE_US_CONTACTS,
    payload: {
      ...params,
    },
  });
  return callApi("companyId=171&countryId=226", params)
    .then((response) => {
      resolve(response.data);
      dispatch({
        payload: {
          data: response.data,
        },
        type: types.GET_MORE_US_CONTACTS_SUCCED,
      });
    })
    .catch((error) => {
      dispatch({
        payload: {
          error,
        },
        type: types.GET_MORE_US_CONTACTS_FAILD,
      });
    });
};

