import axios, { AxiosResponse } from "axios";
import { ResponseData } from "../types";

export const getUrl = async (url: string): Promise<AxiosResponse> =>
  axios.get<ResponseData>(`https://api.shrtco.de/v2/shorten?url=${url}`);
