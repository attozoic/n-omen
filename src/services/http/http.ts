/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

export const parseArgs = (args: any) => {
  let [url, data, opts] = args;

  if (typeof args[0] !== 'string') {
    const d = args[0];
    ({ url, data, opts } = d);
  }

  return { url, data, opts };
};

export default class Http {
  constructor() {
    axios.create(axios.defaults);

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  request(method: any, url: string, data: any, opts: any) {
    return new Promise<any>((resolve, reject) => {
      let options: AxiosRequestConfig = {};

      if (method) {
        options = { method, url, ...opts };
        const key = options.method === 'get' ? 'params' : 'data';
        options[key] = data;
      } else {
        options = method;
      }

      axios(options).then(resolve).catch(reject);
    });
  }

  get(...args: any) {
    const { url, data, opts } = parseArgs(args);

    return this.request('get', url, data, opts);
  }

  post(...args: any) {
    const { url, data, opts } = parseArgs(args);

    return this.request('post', url, data, opts);
  }

  put(...args: any) {
    const { url, data, opts } = parseArgs(args);

    return this.request('put', url, data, opts);
  }

  patch(...args: any) {
    const { url, data, opts } = parseArgs(args);

    return this.request('patch', url, data, opts);
  }

  delete(...args: any) {
    const { url, data, opts } = parseArgs(args);

    return this.request('delete', url, data, opts);
  }
}
