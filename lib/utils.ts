import axios from "axios";
import * as qs from "qs";
import { keyValueString, keyValueAny } from "./interfaces";

export const generatePostRequest = async (
  url: string,
  params: any,
  headers: keyValueString
) => {
  try {
    const response = await axios.post(
      url,
      qs.stringify(params, { indices: false, encode: false }),
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const generateGetRequest = async (
  base_url: string,
  headers: keyValueString,
  requiered_params: keyValueAny,
  others_params?: keyValueAny
) => {
  let url = base_url;
  let isFirst: boolean = true;
  Object.keys(requiered_params).forEach((param) => {
    const formated_param = `${param}=${requiered_params[param]}`;
    if (isFirst) {
      isFirst = false;
      url = `${url}?${formated_param}`;
    }
    url = `${url}&${formated_param}`;
  });
  if (others_params !== null) {
    Object.keys(others_params).forEach((param) => {
      if (!isFirst) {
        url = `${url}&${param}=${others_params[param]}`;
      }
    });
  }
  try {
    const response = await axios.get(url, {
      headers,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const isNullOrUndefined = (value: any) =>
  value === undefined || value === null;
