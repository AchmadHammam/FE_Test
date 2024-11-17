"use client";

import { GetToken } from "@/controller/token";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { addData } from "@/app/helper/dataLalinAdd";
import { SearchBar } from "@/components/search";
import { TbFileExport } from "react-icons/tb";

export default function LaporanPage() {
  const [limit, setLimit] = useState(100);
  const optionLimit = ["Entiries", 10, 15];
  const [data, setData] = useState<Lalin[]>([]);
  const [dataLalin, setDataLalin] = useState<LalinFilter[]>([]);
  const [tanggal, setTanggal] = useState("2023-11-01");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(1);

  const dataLalinFilter: LalinFilter[] = [
    {
      IdCabang: 1,
      IdGerbang: 101,
      IdGardu: 201,
      Tanggal: "2024-11-01",
      metodePembayaran: "TUNAI",
      gol1: 500,
      gol2: 300,
      gol3: 150,
      gol4: 50,
      gol5: 20,
      tolalLalin: 1020,
    },
    {
      IdCabang: 2,
      IdGerbang: 102,
      IdGardu: 202,
      Tanggal: "2024-11-02",
      metodePembayaran: "NON-TUNAI",
      gol1: 600,
      gol2: 320,
      gol3: 180,
      gol4: 40,
      gol5: 30,
      tolalLalin: 1170,
    },
    {
      IdCabang: 3,
      IdGerbang: 103,
      IdGardu: 203,
      Tanggal: "2024-11-03",
      metodePembayaran: "TUNAI",
      gol1: 700,
      gol2: 350,
      gol3: 200,
      gol4: 60,
      gol5: 40,
      tolalLalin: 1350,
    },
    {
      IdCabang: 4,
      IdGerbang: 104,
      IdGardu: 204,
      Tanggal: "2024-11-04",
      metodePembayaran: "NON-TUNAI",
      gol1: 400,
      gol2: 280,
      gol3: 120,
      gol4: 90,
      gol5: 25,
      tolalLalin: 915,
    },
    {
      IdCabang: 5,
      IdGerbang: 105,
      IdGardu: 205,
      Tanggal: "2024-11-05",
      metodePembayaran: "TUNAI",
      gol1: 650,
      gol2: 370,
      gol3: 220,
      gol4: 80,
      gol5: 35,
      tolalLalin: 1355,
    },
    {
      IdCabang: 6,
      IdGerbang: 106,
      IdGardu: 206,
      Tanggal: "2024-11-06",
      metodePembayaran: "NON-TUNAI",
      gol1: 750,
      gol2: 400,
      gol3: 250,
      gol4: 30,
      gol5: 15,
      tolalLalin: 1450,
    },
    {
      IdCabang: 7,
      IdGerbang: 107,
      IdGardu: 207,
      Tanggal: "2024-11-07",
      metodePembayaran: "TUNAI",
      gol1: 500,
      gol2: 330,
      gol3: 190,
      gol4: 70,
      gol5: 20,
      tolalLalin: 1110,
    },
    {
      IdCabang: 8,
      IdGerbang: 108,
      IdGardu: 208,
      Tanggal: "2024-11-08",
      metodePembayaran: "NON-TUNAI",
      gol1: 800,
      gol2: 420,
      gol3: 240,
      gol4: 100,
      gol5: 50,
      tolalLalin: 1610,
    },
    {
      IdCabang: 9,
      IdGerbang: 109,
      IdGardu: 209,
      Tanggal: "2024-11-09",
      metodePembayaran: "TUNAI",
      gol1: 550,
      gol2: 310,
      gol3: 160,
      gol4: 60,
      gol5: 25,
      tolalLalin: 1105,
    },
    {
      IdCabang: 10,
      IdGerbang: 110,
      IdGardu: 210,
      Tanggal: "2024-11-10",
      metodePembayaran: "NON-TUNAI",
      gol1: 600,
      gol2: 350,
      gol3: 190,
      gol4: 80,
      gol5: 40,
      tolalLalin: 1260,
    },
  ];

  const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onchangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTanggal(moment(e.target.value).tz("Asia/Jakarta").format("DD/MM/YYYY"));
  };

  const onClickLPagenation = () => {
    setPage(page - 1);
  };

  const onClickRPagenation = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = await GetToken();
  //     const res = await fetch(
  //       `http://localhost:8080/api/lalins?tanggal=${tanggal}&limit=${limit}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const rawData: ModelLalin = await res.json();
  //     setData(rawData.data.rows.rows);
  //   };
  //   fetchData();
  // }, [limit, tanggal]);

  return (
    <div>
      <div className='text-xl font-bold px-2'>Laporan Lalin Per hari</div>
      <div className=' flex flex-row gap-5 my-2 py-5 border shadow-md px-5'>
        <SearchBar onchange={onchangeSearch} value={search} />
        <input
          onChange={onchangeDate}
          defaultValue={tanggal}
          placeholder='Tanggal'
          type='date'
          className='h-11 flex flex-row items-center bg-gray-400 border border-gray-800 rounded-md gap-2 px-2 text-center'
        />
      </div>
      <div className='py-2 px-2'>
        <div className=' flex flex-row gap-2 justify-between'>
          <div className=' flex flex-row'>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total Tunai
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total E-Toll
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total Flo
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total KTP
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total Keseluruhan
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total Tunai + E-Toll + Flo
            </div>
            <div className='border p-2 text-sm shadow-md bg-gray-400 rounded'>
              Total Tunai
            </div>
          </div>
          <div className=' flex flex-row border rounded p-2 text-sm shadow-md bg-gray-400 text-center '>
            <TbFileExport size={25} />
            <div>Export </div>
          </div>
        </div>
      </div>
      <div className=' text-center'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                No
              </th>
              <th className='p-2 bg-gray-300 shadow shadow-gray-300 text-sm'>
                Ruas
              </th>
              <th className='p-2 bg-gray-300 shadow shadow-gray-300 text-sm'>
                Gerbang
              </th>
              <th className='p-2  bg-gray-300  shadow shadow-gray-300 text-sm'>
                Gardu
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                Hari
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                Tanggal
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                Metode Pembayaran
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                GOL I
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                GOL II
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                GOL III
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                GOL IV
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                GOL V
              </th>
              <th className=' p-2 bg-gray-300  shadow shadow-gray-300 text-sm'>
                Total Lalin
              </th>
            </tr>
          </thead>
          <tbody>
            {dataLalinFilter && dataLalinFilter.length > 0 ? (
              dataLalinFilter.map((value, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{value.IdCabang}</td>
                    <td>{value.IdGerbang}</td>
                    <td>{value.IdGardu}</td>
                    <td>{moment(value.Tanggal).format("DD/MM/YYYY")}</td>
                    <td>
                      {moment(value.Tanggal).tz("Asia/Jakarta").format("dddd")}
                    </td>
                    <td>{value.metodePembayaran}</td>
                    <td>{value.gol1}</td>
                    <td>{value.gol2}</td>
                    <td>{value.gol3}</td>
                    <td>{value.gol4}</td>
                    <td>{value.gol5}</td>
                    <td>{value.tolalLalin}</td>
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
            <tr className=' bg-gray-300 p-2'>
              <td colSpan={7}>Total Lalin Ruas 1</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
            <tr className=' bg-gray-300 p-2'>
              <td colSpan={7}>Total Lalin Ruas 2</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
            <tr className=' bg-gray-400 p-2'>
              <td colSpan={7}>Total Lalin Kesuruhan</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
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
      </div>
    </div>
  );
}
