"use client";

import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";

export const SideBar: React.FC = () => {
  const [hide, setHide] = useState<boolean>(true);
  const onClickLaporan = (value: boolean) => {
    setHide(!value);
  };
  return (
    <div className="p-5 bg-white w-1/6 gap-x-2 flex flex-col">
      <div className="py-2">
        <a href="/dashboard">
          <div className=" flex flex-row gap-2 items-center">
            <HiOutlinePhoto size={20} />
            Dashboard
          </div>
        </a>
      </div>
      <div className="py-2">
        <div
          className=" flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => onClickLaporan(hide)}
        >
          <HiOutlineChartSquareBar size={20} />
          Laporan
        </div>
        {hide == false ? (
          <a href="/laporan">
            <div className="ml-6 mt-2">Laporan Per Hari</div>
          </a>
        ) : (
          <div></div>
        )}
      </div>
      <div className="py-2">
        <a href="/master-gerbang">
          <div className=" flex flex-row gap-2 items-center">
            <IoSettings size={20} />
            Master Gerbang
          </div>
        </a>
      </div>
    </div>
  );
};
