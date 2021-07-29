import axios, { AxiosResponse } from "axios";
import { ResponseData } from "../types";

// TODO: handle request errors
export const getUrl = async (url: string): Promise<AxiosResponse> =>
  axios.get<ResponseData>(`https://api.shrtco.de/v2/shorten?url=${url}`);
