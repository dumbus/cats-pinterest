import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { CARDS_PER_PAGE } from 'config/appConfig';

import { IRawCatData } from 'types/api';
import { ICatData } from 'types/entities';

class CatService {
  private _apiClient: AxiosInstance;

  constructor() {
    this._apiClient = axios.create({
      baseURL: 'https://api.thecatapi.com/v1/images/',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_API_KEY,
      },
      params: {
        apiKey: import.meta.env.VITE_API_KEY,
      },
    });
  }

  getResource = async <D>(config: AxiosRequestConfig): Promise<D> => {
    try {
      const response = await this._apiClient({
        ...config,
        method: 'get',
      });

      if (response.status !== 200) {
        throw new Error(`Could not fetch ${config.url}, status: ${response.status}`);
      }

      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      throw new Error(`Error fetching data from ${config.url}: ${errorMessage}`);
    }
  };

  getCats = async (page = 1): Promise<ICatData[]> => {
    const rawCatData = await this.getResource<IRawCatData[]>({
      url: '/search',
      params: {
        limit: CARDS_PER_PAGE,
        page,
      },
    });

    const catData = this._transfrormPaginatedCatsData(rawCatData);

    return catData;
  };

  _transfrormPaginatedCatsData = (rawCatData: IRawCatData[]) => {
    return rawCatData.map((rawCatItem) => {
      return {
        id: rawCatItem.id,
        imageUrl: rawCatItem.url,
      };
    });
  };
}

export default CatService;
