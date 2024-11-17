"use client";
import { SearchBar } from "@/components/search";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { DialogAddGerbang } from "@/components/gerbang/add";
import { DialogUpdateGerbang } from "@/components/gerbang/update";
import { GetToken } from "@/controller/token";
import { DialogDetailGerbang } from "@/components/gerbang/detail";
import { DialogDeleteGerbang } from "@/components/gerbang/delete";

export default function MasterGerbangPage() {
  const [search, setSearch] = useState<string>("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedGerbang, setSelectedGerbang] = useState<Gerbang | null>(null);
  const [page, setPage] = useState(1);
  const [searchInt, setSearchInt] = useState(1);
  const [url, setUrl] = useState(``);
  const [limit, setLimit] = useState(10);
  const optionLimit = ["Entiries", 10, 15];

  const [data, setData] = useState<Gerbang[]>([]);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickLPagenation = () => {
    setPage(page - 1);
  };

  const onClickRPagenation = () => {
    setPage(page + 1);
  };

  const onUpdateClick = (namaGerbang: Gerbang) => {
    setSelectedGerbang(namaGerbang);
    setOpenUpdate(!openUpdate);
  };

  const onDetailClick = (namaGerbang: Gerbang) => {
    setSelectedGerbang(namaGerbang);
    setOpenDetail(!openDetail);
  };

  const onDeleteClick = (namaGerbang: Gerbang) => {
    setSelectedGerbang(namaGerbang);
    setOpenDelete(!openDelete);
  };

  const onAddClick = () => {
    setOpenAdd(!openAdd);
  };
  useEffect(() => {
    console.log(limit);

    const fetchData = async () => {
      setSearchInt(parseInt(search));
      if (Number.isNaN(searchInt)) {
        setUrl(
          `http://localhost:8080/api/gerbangs?NamaGerbang=${search}&NamaCabang=${search}&page=${page}&limit=${limit}`
        );
      } else {
        setUrl(
          `http://localhost:8080/api/gerbangs?id=${searchInt}&IdCabang=${searchInt}&page=${page}&limit=${limit}`
        );
      }

      const token = await GetToken();
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const rawData: ModelGerbang = await res.json();
      setData(rawData.data.rows.rows);
    };
    fetchData();
  }, [page, search, searchInt, url, limit]);

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
        <table className=' border-collapse mt-5 table-fixed text-center overflow-auto'>
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
            {data && data.length > 0 ? (
              data.map((value, i) => {
                return (
                  <tr key={i}>
                    <td className='py-[1.5pt]'>{i + 1}</td>
                    <td>{value.NamaCabang}</td>
                    <td>{value.NamaGerbang}</td>
                    <td>
                      <div className='flex flex-row gap-2 justify-center'>
                        <AiTwotoneEdit
                          className=' cursor-pointer'
                          onClick={() => {
                            onUpdateClick(value);
                          }}
                        />
                        <HiOutlineEye
                          className=' cursor-pointer'
                          onClick={() => {
                            onDetailClick(value);
                          }}
                        />
                        <FaRegTrashAlt
                          className=' cursor-pointer'
                          onClick={() => {
                            onDeleteClick(value);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className='text-black'>
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className=' fixed  right-[5%] pt-10 flex flex-row gap-2'>
          <select
            className=' text-sm text-center justify-center h-8 text-gray-500 bg-gray-300 border border-gray-700 hover:bg-gray-100 hover:text-gray-700  rounded cursor-pointer'
            onChange={(e) => {
              const value = parseInt(e.target.value);
              console.log(value);
              if (!Number.isNaN(value)) {
                setLimit(value);
              }
            }}
          >
            {optionLimit.map((value) => {
              return (
                <option key={value} className=' text-sm'>
                  {value}
                </option>
              );
            })}
          </select>
          <div>
            <ul className='inline-flex -space-x-px text-sm '>
              {page != 1 ? (
                <li>
                  <div
                    className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300 border border-gray-700 hover:bg-gray-100 hover:text-gray-700  rounded-l cursor-pointer'
                    onClick={onClickLPagenation}
                  >
                    {page - 1}
                  </div>
                </li>
              ) : (
                <div></div>
              )}
              <li>
                <div className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300 border border-gray-700 hover:bg-gray-100 hover:text-gray-700 '>
                  {page}
                </div>
              </li>
              <li>
                <div
                  className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-300 border border-gray-700 hover:bg-gray-100 hover:text-gray-700  rounded-r cursor-pointer'
                  onClick={onClickRPagenation}
                >
                  {page + 1}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <DialogUpdateGerbang
          open={openUpdate}
          title='Update Gerbang'
          gerbang={selectedGerbang}
          onClose={() => {
            onUpdateClick(selectedGerbang!);
          }}
        />
        <DialogDetailGerbang
          open={openDetail}
          title='Detail Gerbang'
          gerbang={selectedGerbang}
          onClose={() => {
            onDetailClick(selectedGerbang!);
          }}
        />
        <DialogDeleteGerbang
          open={openDelete}
          title='Detail Gerbang'
          gerbang={selectedGerbang!}
          onClose={() => {
            onDeleteClick(selectedGerbang!);
          }}
        />
      </div>
    </div>
  );
}
