import React from "react";

const Card = ({ name, last, buy, sell, volume, base_unit, index }) => {
  return (
    <div className="bg-[#2E3241] rounded-lg px-5 py-3">
      <ul className="flex text-center text-white text-left  font-bold text-lg justify-between">
        <li className=" flex-1">{index + 1}</li>
        <li className=" flex-1">{name}</li>
        <li className=" flex-1">{last}</li>
        <li className=" flex-1">₹ {buy} </li>
        <li className=" flex-1">₹ {sell} </li>
        <li className=" flex-1">₹ {volume} </li>
        <li className=" flex-1">₹ {base_unit} </li>
      </ul>
    </div>
  );
};

export default Card;
