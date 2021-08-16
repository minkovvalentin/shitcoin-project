import React from "react";
import RedditCoins from "../../components/coins/coins";
import CreateCoin from "../../components/create-coin/create";
import styles from "../../styles/coins.module.css";
import { useRouter } from "next/router";

export default function Coins() {
  const router = useRouter();
  const { subpage } = router.query;

  const getContentFromRotuerParam = (
    routerParam: undefined | string[] | string
  ) => {
    let subpage;

    if (routerParam === undefined) {
      if (typeof window !== "undefined") {
        router.push("/coins/find");
      }
    } /* No nested routes */ else if (routerParam.length > 1) {
    } else {
      subpage = routerParam[0];
    }

    if (subpage === "find") {
      return getFindContent();
    } else if (subpage === "new-coin") {
      return <CreateCoin />;
    } else {
    }
  };

  const getFindContent = () => {
    return <RedditCoins />;
  };

  return (
    <div className={styles["main-container"]}>
      {/* Candidate for a component */}
      <div className={styles["toolbar-container"]}>
        <button
          disabled={subpage ? subpage[0] === "find" : false}
          className={styles["toolbar-button"]}
          onClick={() => router.push("/coins/find")}
        >
          Find Coins
        </button>
        <button
          disabled={subpage ? subpage[0] === "new-coin" : false}
          className={styles["toolbar-button"]}
          onClick={() => router.push("/coins/new-coin")}
        >
          Add a Coin
        </button>
      </div>
      {getContentFromRotuerParam(subpage)}
    </div>
  );
}
