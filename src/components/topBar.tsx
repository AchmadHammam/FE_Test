import React from "react";
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";

export const TopBar: React.FC = () => {
  return (
    <div className=" justify-between flex flex-row bg-gray-400 p-2 w-full items-center  border border-gray-500 shadow-2xl rounded-br-md">
      <div className="ml-14">
        <a href="/dashboard">
          <Image src="/book.svg" width={75} height={75} alt="logo" />
        </a>
      </div>
      <div className=" flex flex-row gap-5">
        <BsPersonCircle size={35} color="#3236A8" />
        <FaRegListAlt size={35} color="#3236A8" />
      </div>
    </div>
  );
};
