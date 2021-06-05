import { RedditCoin } from '../interfaces/coin';
import { externalCoinDetailsApi } from '../routes/routes';

const fetchCoinDetails = async (): Promise<RedditCoin[]> => {
  const response = await fetch(externalCoinDetailsApi);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json().then(data => data as RedditCoin[]);
}

export {
  fetchCoinDetails
}