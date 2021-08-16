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
    let unmounted = false;

    const getCoins = async () => {
      /* TODO: 
        - You must cache result and not keep making server requests
      */
      let fetchedCoins: RedditCoin[] = await fetchCoinDetails();
      if (!unmounted) {
        setCoins(fetchedCoins);
      }
    };

    getCoins();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      {coins.length > 0 && <CoinsList coinsData={coins} />}
      {coins.length === 0 && <Spinner />}
    </>
  );
};

export default Coins;
