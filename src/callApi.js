import axios from "axios";
import config from "./config";

export default function callApi(param, page) {
  return axios({
    method: 'GET',
    url: `${config.URL_API}?${param}&page=${page}`,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk",
    },
  });
}
