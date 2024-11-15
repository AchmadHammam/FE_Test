"use client";
import { SearchBar } from "@/components/search";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useState } from "react";
import { DialogAddGerbang } from "@/components/gerbang/add";
import { DialogUpdateGerbang } from "@/components/gerbang/update";

export default function MasterGerbangPage() {
  const [search, setSearch] = useState<string>("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedGerbang, setSelectedGerbang] = useState(0);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onAddClick = () => {
    setOpenAdd(!openAdd);
  };

  const onUpdateClick = () => {
    setOpenUpdate(!openUpdate);
  };
  const data = [
    {
      ruas: "Nala",
      gerbang: "Joey",
    },
    {
      ruas: "Daisy",
      gerbang: "Tuffy",
    },
    {
      ruas: "Cookie",
      gerbang: "Jax",
    },
    {
      ruas: "Maggie",
      gerbang: "Joey",
    },
    {
      ruas: "Scout",
      gerbang: "Gracie",
    },
    {
      ruas: "Bruno",
      gerbang: "Hank",
    },
    {
      ruas: "Ginger",
      gerbang: "Bailey",
    },
    {
      ruas: "Murphey",
      gerbang: "Cookie",
    },
    {
      ruas: "Charlie",
      gerbang: "Oreo",
    },
    {
      ruas: "Charlie",
      gerbang: "Scout",
    },
    {
      ruas: "Charlie",
      gerbang: "Ollie",
    },
    {
      ruas: "Bella",
      gerbang: "Ollie",
    },
    {
      ruas: "Bandit",
      gerbang: "Gracie",
    },
    {
      ruas: "Dixie",
      gerbang: "Dixie",
    },
    {
      ruas: "Maggie",
      gerbang: "Louie",
    },
    {
      ruas: "Louie",
      gerbang: "Joey",
    },
    {
      ruas: "Dixie",
      gerbang: "Bruno",
    },
    {
      ruas: "Buddy",
      gerbang: "Nala",
    },
    {
      ruas: "Cookie",
      gerbang: "Max",
    },
    {
      ruas: "Bentley",
      gerbang: "Bentley",
    },
    {
      ruas: "Scout",
      gerbang: "Max",
    },
    {
      ruas: "Molly",
      gerbang: "Charlie",
    },
    {
      ruas: "Lola",
      gerbang: "Murphey",
    },
    {
      ruas: "Mia",
      gerbang: "Cooper",
    },
    {
      ruas: "Jack",
      gerbang: "Rosie",
    },
    {
      ruas: "Buddy",
      gerbang: "Maggie",
    },
    {
      ruas: "Rosie",
      gerbang: "Maggie",
    },
    {
      ruas: "Louie",
      gerbang: "Tuffy",
    },
    {
      ruas: "Ollie",
      gerbang: "Murphey",
    },
    {
      ruas: "Oreo",
      gerbang: "Gracie",
    },
    {
      ruas: "Milo",
      gerbang: "Molly",
    },
    {
      ruas: "Rosie",
      gerbang: "Murphey",
    },
    {
      ruas: "Nova",
      gerbang: "Gracie",
    },
    {
      ruas: "Dixie",
      gerbang: "Mia",
    },
    {
      ruas: "Charlie",
      gerbang: "Nova",
    },
    {
      ruas: "Buddy",
      gerbang: "Milo",
    },
    {
      ruas: "Daisy",
      gerbang: "Bruno",
    },
    {
      ruas: "Jack",
      gerbang: "Oreo",
    },
    {
      ruas: "Bella",
      gerbang: "Gus",
    },
    {
      ruas: "Milo",
      gerbang: "Max",
    },
    {
      ruas: "Charlie",
      gerbang: "Stella",
    },
    {
      ruas: "Murphey",
      gerbang: "Gus",
    },
    {
      ruas: "Mia",
      gerbang: "Max",
    },
    {
      ruas: "Lola",
      gerbang: "Finn",
    },
    {
      ruas: "Louie",
      gerbang: "Molly",
    },
    {
      ruas: "Tuffy",
      gerbang: "Murphey",
    },
    {
      ruas: "Ollie",
      gerbang: "Bandit",
    },
    {
      ruas: "Bandit",
      gerbang: "Ollie",
    },
    {
      ruas: "Molly",
      gerbang: "Ace",
    },
    {
      ruas: "Jack",
      gerbang: "Lola",
    },
    {
      ruas: "Bella",
      gerbang: "Daisy",
    },
    {
      ruas: "Bandit",
      gerbang: "Bruno",
    },
    {
      ruas: "Nova",
      gerbang: "Cookie",
    },
    {
      ruas: "Max",
      gerbang: "Murphey",
    },
    {
      ruas: "Stella",
      gerbang: "Ace",
    },
    {
      ruas: "Archie",
      gerbang: "Jack",
    },
    {
      ruas: "Nova",
      gerbang: "Joey",
    },
    {
      ruas: "Molly",
      gerbang: "Bentley",
    },
    {
      ruas: "Ginger",
      gerbang: "Mia",
    },
    {
      ruas: "Gus",
      gerbang: "Daisy",
    },
    {
      ruas: "Rosie",
      gerbang: "Kobe",
    },
    {
      ruas: "Buddy",
      gerbang: "Nova",
    },
    {
      ruas: "Gus",
      gerbang: "Jax",
    },
    {
      ruas: "Joey",
      gerbang: "Nala",
    },
    {
      ruas: "Scout",
      gerbang: "Kobe",
    },
    {
      ruas: "Archie",
      gerbang: "Buddy",
    },
    {
      ruas: "Bandit",
      gerbang: "Ollie",
    },
    {
      ruas: "Bailey",
      gerbang: "Bentley",
    },
    {
      ruas: "Dixie",
      gerbang: "Nova",
    },
    {
      ruas: "Nova",
      gerbang: "Nala",
    },
    {
      ruas: "Molly",
      gerbang: "Lucy",
    },
    {
      ruas: "Bruno",
      gerbang: "Nova",
    },
    {
      ruas: "Kobe",
      gerbang: "Charlie",
    },
    {
      ruas: "Bandit",
      gerbang: "Lola",
    },
    {
      ruas: "Bailey",
      gerbang: "Bandit",
    },
    {
      ruas: "Cookie",
      gerbang: "Bruno",
    },
    {
      ruas: "Lucy",
      gerbang: "Dixie",
    },
    {
      ruas: "Bruno",
      gerbang: "Lola",
    },
    {
      ruas: "Kobe",
      gerbang: "Maggie",
    },
    {
      ruas: "Cookie",
      gerbang: "Scout",
    },
    {
      ruas: "Bailey",
      gerbang: "Buddy",
    },
    {
      ruas: "Oreo",
      gerbang: "Lola",
    },
    {
      ruas: "Scout",
      gerbang: "Leo",
    },
    {
      ruas: "Charlie",
      gerbang: "Ginger",
    },
    {
      ruas: "Finn",
      gerbang: "Daisy",
    },
    {
      ruas: "Max",
      gerbang: "Molly",
    },
    {
      ruas: "Oreo",
      gerbang: "Joey",
    },
    {
      ruas: "Jack",
      gerbang: "Scout",
    },
    {
      ruas: "Joey",
      gerbang: "Rosie",
    },
    {
      ruas: "Bailey",
      gerbang: "Bruno",
    },
    {
      ruas: "Kobe",
      gerbang: "Teddy",
    },
    {
      ruas: "Lucy",
      gerbang: "Gracie",
    },
    {
      ruas: "Jack",
      gerbang: "Kobe",
    },
    {
      ruas: "Hank",
      gerbang: "Ace",
    },
    {
      ruas: "Scout",
      gerbang: "Max",
    },
    {
      ruas: "Gracie",
      gerbang: "Cooper",
    },
    {
      ruas: "Lucy",
      gerbang: "Murphey",
    },
    {
      ruas: "Teddy",
      gerbang: "Charlie",
    },
    {
      ruas: "Mia",
      gerbang: "Archie",
    },
    {
      ruas: "Dixie",
      gerbang: "Nala",
    },
  ];

  return (
    <div className='flex flex-col '>
      <div className='text-xl font-bold px-2'>Master Gerbang</div>
      <div className=' flex flex-row justify-between pt-10 w-full px-2'>
        <SearchBar onchange={onchange} value={search} />
        <button
          className='bg-gray-500 text-white flex flex-row gap-2 items-center px-5 mr-2 rounded-sm shadow  '
          onClick={onAddClick}
        >
          <AiOutlinePlusCircle size={25} />
          <div>Tambah</div>
        </button>
      </div>
      <DialogAddGerbang
        open={openAdd}
        title='Tambah Gerbang'
        onClose={onAddClick}
      />
      <div className='px-2'>
        <table className=' border-collapse mt-5 table-fixed text-center'>
          <thead>
            <tr>
              <th className='w-[3%] bg-gray-300 py-3 shadow shadow-gray-300'>
                No
              </th>
              <th className='w-[20%] bg-gray-300 shadow shadow-gray-300'>
                Ruas
              </th>
              <th className='w-[20%] bg-gray-300 shadow shadow-gray-300'>
                Gerbang
              </th>
              <th className='w-[5%]  bg-gray-300 px-5 shadow shadow-gray-300'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, i) => {
              return (
                <tr key={i}>
                  <td className='py-[1.5pt]'>{i + 1}</td>
                  <td>{value.ruas}</td>
                  <td>{value.gerbang}</td>
                  <td>
                    <div className='flex flex-row gap-2 justify-center'>
                      <AiTwotoneEdit
                        onClick={onUpdateClick}
                        className=' cursor-pointer'
                      />
                      <HiOutlineEye />
                      <FaRegTrashAlt />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DialogUpdateGerbang
          open={openUpdate}
          title='Update Gerbang'
          onClose={onUpdateClick}
        />
      </div>
    </div>
  );
}
