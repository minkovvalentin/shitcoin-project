import React, { useEffect, useState } from 'react';
import { fetchCoinDetails } from '../api/coinDetails';
import CoinsList from '../components/coinsList';
import Spinner from '../components/loaderSpinner'
import { RedditCoin } from '../interfaces/coin';
import styles from '../styles/coins.module.css'

export default function Coins() {
  const [coins, setCoins] = useState<RedditCoin[]>([]);

  /* Fetch coins */
  useEffect(() => {
    const getCoins = async () => {
     let fetchedCoins: RedditCoin[] = await fetchCoinDetails();
     setCoins(fetchedCoins);
    }    
    getCoins();
  },[]);
  
  return (
    <div className={styles['main-container']}>
      {coins.length > 0 &&
        <CoinsList coinsData={coins}/>
      }
      {coins.length === 0 &&
        <Spinner/>
      }
    </div>
  )
}