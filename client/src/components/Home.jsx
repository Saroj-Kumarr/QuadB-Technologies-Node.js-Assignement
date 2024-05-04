import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [tickers, setTickers] = useState([]);

  const fetchTickers = async () => {
    try {
      const response = await fetch("http://localhost:8000/tickers");
      const json = await response.json();
      setTickers(json.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTickers();
  }, []);

  if (tickers.length == 0) {
    return <div>Loading...</div>;
  }

  console.log(tickers);

  return (
    <div className="min-h-screen px-10">
      <div>
        <div className="flex justify-center flex-col gap-5">
          <p className="text-center text-2xl text-[#888686]">
            Best Price to Trade
          </p>
          <ul className="flex justify-center gap-20 items-center">
            <li>
              <p className="text-2xl font-semibold text-[#3DC6C1]">0.1 %</p>
              <span className="text-[#888686]">5 Mins</span>
            </li>
            <li>
              <p className="text-2xl font-semibold  text-[#3DC6C1]">0.96 %</p>
              <span className="text-[#888686]">1 Hour</span>
            </li>
            <li className="text-6xl text-white font-bold">₹ 26,56,110</li>
            <li>
              <p className="text-2xl font-semibold  text-[#3DC6C1]">2.73 %</p>
              <span className="text-[#888686]">1 Day</span>
            </li>
            <li>
              <p className="text-2xl font-semibold  text-[#3DC6C1]">7.51 %</p>
              <span className="text-[#888686]">7 day</span>
            </li>
          </ul>
          <p className="text-center text-xl text-[#888686]">
            Average BTC/INT net price commision
          </p>
        </div>
      </div>

      <div className="mt-20">
        <ul className="flex text-left  text-[#888686] font-bold text-lg  justify-between text-center px-2">
          <li className=" flex-1">#</li>
          <li className=" flex-1">Name</li>
          <li className=" flex-1">Last</li>
          <li className=" w-56 flex-1">Buy</li>
          <li className=" flex-1">Sell</li>
          <li className=" flex-1">Volume</li>
          <li className=" flex-1">Base Unit</li>
        </ul>

        <div className="mt-3 flex flex-col gap-4">
          {tickers.map(
            ({ name, last, buy, sell, volume, base_unit }, index) => (
              <Card
                key={index}
                name={name}
                last={last}
                buy={buy}
                sell={sell}
                volume={volume}
                base_unit={base_unit}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
