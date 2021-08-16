import Spinner from "../loaderSpinner";
import CoinsList from "../coinsList";
import style from "./styles/coins.module.scss";
import { useEffect, useState } from "react";
import { RedditCoin } from "../../interfaces/coin";
import { fetchCoinDetails } from "../../api/coinDetails";

const Coins = (props: any) => {
  const [coins, setCoins] = useState<RedditCoin[]>([]);

  /* Fetch coins */
  useEffect(() => {
    const getCoins = async () => {
      /* TODO: 
        - You must  cache result somehow and not keep making server requests
        - Cancel all subscriptions and asynchronous tasks in the useEffect cleanup function
      */
      let fetchedCoins: RedditCoin[] = await fetchCoinDetails();
      setCoins(fetchedCoins);
    };
    getCoins();
  }, []);

  return (
    <>
      {coins.length > 0 && <CoinsList coinsData={coins} />}
      {coins.length === 0 && <Spinner />}
    </>
  );
};

export default Coins;
