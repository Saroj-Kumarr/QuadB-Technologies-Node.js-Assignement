import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const Header = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 55,
    height: 32,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(23px)",
        color: "#3DC6C1",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#2E3241",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#3DC6C1",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 28,
      height: 28,
    },
    "& .MuiSwitch-track": {
      borderRadius: 30 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const options = [
    "BTC",
    "ETH",
    "USDT",
    "XRP",
    "TRX",
    "DASH",
    "ZEC",
    "XEM",
    "IOST",
    "WIN",
    "BTT",
    "WRX",
  ];

  return (
    <div className="flex items-center justify-between px-10 py-6">
      <div>
        <img
          src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
          alt="logo"
          className="h-[55px]"
        />
      </div>
      <div className="flex items-center gap-7">
        <div className="bg-[#2E3241] px-3 py-2 rounded-[10px]">
          <select className="bg-[#2E3241] text-white outline-none ">
            <option value="INR" className="text-black">
              INR
            </option>
          </select>
        </div>
        <div className="bg-[#2E3241] px-3 py-2 rounded-[10px]">
          <select className="bg-[#2E3241] text-white outline-none">
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-[#2E3241] px-3 py-2 rounded-[10px] text-white">
          <button>BUY BTC</button>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white y-1 font-bold">
          <span className="text-[#3DC6C1]">25</span>
        </div>
        <div className="rounded-xl px-2 py-2  flex gap-2 bg-[#3DC6C1] text-white items-center font-bold">
          <FaTelegramPlane className="text-xl" />
          <span>Connect Telegram</span>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label=""
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Header;
