import { useEffect, useState } from 'react'
import { fetchCoinDetails } from '../api/coinDetails'
import { RedditCoin } from '../interfaces/coin'
import styles from '../styles/Index.module.css'

export default function Home() {

  const [coins, setCoins] = useState<RedditCoin[]>([]);
  const [darkmode, setDarkmode] = useState<boolean>(false);
  
  /* Fetch coins */
  useEffect(() => {
    const getCoins = async () => {
     let fetchedCoins: RedditCoin[] = await fetchCoinDetails();
     setCoins(fetchedCoins);
    }    
    getCoins();
  },[]);
  
  return (
    <div className={styles.container}>

    </div>
  )
}
