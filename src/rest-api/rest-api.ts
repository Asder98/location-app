import axios from "axios";
import { api_access_key } from "../keys";
import { DetailsResponse } from "./rest-api-types";

const instance = axios.create({
  baseURL: "http://api.ipstack.com/",
  timeout: 1000,
});

export const getDetails = (address: string): Promise<DetailsResponse> => {
  return instance
    .get(`/${address}?access_key=${api_access_key}`)
    .then((response) => response.data);
};

export const getUserDetails = (): Promise<DetailsResponse> => {
  return instance
    .get(`/check?access_key=${api_access_key}`)
    .then((response) => response.data);
};
