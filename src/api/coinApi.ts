import { env } from '@/env'
import axios from 'axios'

export const coinApi = axios.create({
  baseURL: 'https://rest.coinapi.io/v1',
  headers: { 'X-CoinAPI-Key': env.VITE_REACT_APP_COIN_API_KEY },
})
