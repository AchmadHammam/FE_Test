"use client";
import { CostumButton } from "@/components/costumButton";
import moment from "moment-timezone";
import { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Legend,
  BarElement,
  Tooltip,
} from "chart.js";

export default function DashboardPage() {
  const [tanggal, setTanggal] = useState("2023-11-01");
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
    BarElement
  );

  const onchangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTanggal(moment(e.target.value).tz("Asia/Jakarta").format("DD/MM/YYYY"));
  };

  return (
    <div>
      <div className='text-xl font-bold px-2'>Dashboard</div>
      <div className='flex flex-row gap-5 items-center'>
        <input
          onChange={onchangeDate}
          placeholder='Tanggal'
          type='date'
          className='h-11 flex flex-row items-center bg-gray-400 border border-gray-800 rounded-md gap-2 px-2 text-center'
        />
        <div className='border px-5 py-3 text-sm shadow-md bg-gray-500 rounded-md text-white'>
          Filter
        </div>
      </div>
      <div className='flex flex-row w-full pt-5'>
        <div className='w-[500pt] h-[200pt] mx-5 p-5 justify-between'>
          <Bar
            data={{
              labels: ["BCA", "BRI ", "BNI", "DKI", "Mandiri", "Mega", "Flo"],
              datasets: [
                {
                  label: "Shift Lalu Lintas", // Label untuk chart (bisa diubah sesuai kebutuhan)
                  data: [25, 50, 60, 10, 100, 55, 10, 20], // Data untuk masing-masing shift
                  backgroundColor: [" #808080"], // Warna untuk setiap segmen
                },
              ],
            }}
            options={{
              responsive: true, // Chart akan responsif terhadap ukuran layar
              maintainAspectRatio: false, // Memungkinkan untuk mengatur lebar dan tinggi manual
              plugins: {
                legend: {
                  display: false,
                  position: "bottom", // Posisi legend, bisa diubah ke 'left', 'bottom', dll.
                  textDirection: "columns",
                  labels: {
                    boxWidth: 20, // Ukuran kotak legend
                    padding: 15, // Jarak antara item legend
                  },
                },
                tooltip: {
                  enabled: true, // Mengaktifkan tooltip
                },
              },
              // Customizing chart size by setting the aspect ratio
              // Nilai rasio aspek (lebar:tinggi), misalnya 2 berarti 2:1
            }}
          />
        </div>
        <div className='w-[200pt] h-[150pt]'>
          <Doughnut
            data={{
              labels: ["shift 1", "shift 2", "shift 3"],
              datasets: [
                {
                  label: "Shift Lalu Lintas", // Label untuk chart (bisa diubah sesuai kebutuhan)
                  data: [60, 20, 20], // Data untuk masing-masing shift
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Warna untuk setiap segmen
                },
              ],
            }}
            options={{
              responsive: true, // Chart akan responsif terhadap ukuran layar
              maintainAspectRatio: false, // Memungkinkan untuk mengatur lebar dan tinggi manual
              plugins: {
                legend: {
                  position: "bottom", // Posisi legend, bisa diubah ke 'left', 'bottom', dll.
                  textDirection: "columns",
                  labels: {
                    boxWidth: 20, // Ukuran kotak legend
                    padding: 15, // Jarak antara item legend
                  },
                },
                tooltip: {
                  enabled: true, // Mengaktifkan tooltip
                },
              },
              // Customizing chart size by setting the aspect ratio
              aspectRatio: 1, // Nilai rasio aspek (lebar:tinggi), misalnya 2 berarti 2:1
            }}
          />
        </div>
      </div>
      <div className='flex flex-row w-full pt-5'>
        <div className='w-[500pt] h-[200pt] mx-5 p-5 justify-between'>
          <Bar
            data={{
              labels: [
                "Gerbang 1",
                "Gerbang 2 ",
                "Gerbang 3",
                "Gerbang 4",
                "Gerbang 5",
              ],
              datasets: [
                {
                  label: "Shift Lalu Lintas", // Label untuk chart (bisa diubah sesuai kebutuhan)
                  data: [25, 50, 60, 10, 100], // Data untuk masing-masing shift
                  backgroundColor: [" #808080"], // Warna untuk setiap segmen
                },
              ],
            }}
            options={{
              responsive: true, // Chart akan responsif terhadap ukuran layar
              maintainAspectRatio: false, // Memungkinkan untuk mengatur lebar dan tinggi manual
              plugins: {
                legend: {
                  display: false,
                  position: "bottom", // Posisi legend, bisa diubah ke 'left', 'bottom', dll.
                  textDirection: "columns",
                  labels: {
                    boxWidth: 20, // Ukuran kotak legend
                    padding: 15, // Jarak antara item legend
                  },
                },
                tooltip: {
                  enabled: true, // Mengaktifkan tooltip
                },
              },
              // Customizing chart size by setting the aspect ratio
              // Nilai rasio aspek (lebar:tinggi), misalnya 2 berarti 2:1
            }}
          />
        </div>
        <div className='w-[200pt] h-[150pt]'>
          <Doughnut
            data={{
              labels: ["Ruas 1", "Ruas 2", "Ruas 3"],
              datasets: [
                {
                  label: "Shift Lalu Lintas", // Label untuk chart (bisa diubah sesuai kebutuhan)
                  data: [60, 20, 20], // Data untuk masing-masing shift
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Warna untuk setiap segmen
                },
              ],
            }}
            options={{
              responsive: true, // Chart akan responsif terhadap ukuran layar
              maintainAspectRatio: false, // Memungkinkan untuk mengatur lebar dan tinggi manual
              plugins: {
                legend: {
                  position: "bottom", // Posisi legend, bisa diubah ke 'left', 'bottom', dll.
                  textDirection: "columns",
                  labels: {
                    boxWidth: 20, // Ukuran kotak legend
                    padding: 15, // Jarak antara item legend
                  },
                },
                tooltip: {
                  enabled: true, // Mengaktifkan tooltip
                },
              },
              // Customizing chart size by setting the aspect ratio
              aspectRatio: 1, // Nilai rasio aspek (lebar:tinggi), misalnya 2 berarti 2:1
            }}
          />
        </div>
      </div>
    </div>
  );
}
