"use client";
import React, { useEffect } from "react";
import { CostumInput } from "../costumInput";
import { GerbangType, GerbangValidation } from "@/schema/gerbang";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CostumButton } from "../costumButton";
import { useRouter } from "next/navigation";
interface DialogAddGerbangType {
  open: boolean;
  title: string;
  onClose: () => void;
}
export const DialogAddGerbang: React.FC<DialogAddGerbangType> = ({
  open,
  title,
  onClose,
}) => {
  const router = useRouter();

  const handleOutsideClick = (event: MouseEvent) => {
    if ((event.target! as HTMLElement).id! === "modal-background") {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GerbangType>({ resolver: zodResolver(GerbangValidation) });

  if (!open) {
    return null;
  }

  const onSubmit = async (data: GerbangType) => {
    const res = await fetch("http://localhost:8080/api/gerbangs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    if (res.ok) {
      onClose();
      router.push("/dashboard");
    } else {
      const message = (await res.json()).message;
      return alert(message);
    }
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <div
      id='modal-background'
      className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
    >
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full'>
        <div className='text-xl font-bold mb-4 text-center'>{title}</div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
              <CostumInput
                type='number'
                label='Id'
                name='id'
                register={register}
                error={errors.id != null ? errors.id.message : ""}
              />
              <CostumInput
                type='number'
                label='Id Cabang'
                name='IdCabang'
                register={register}
                error={errors.IdCabang != null ? errors.IdCabang.message : ""}
              />
              <CostumInput
                type=' text'
                label='Nama Cabang'
                name='NamaCabang'
                register={register}
                error={
                  errors.NamaCabang != null ? errors.NamaCabang.message : ""
                }
              />
              <CostumInput
                type='text'
                label='Nama Gerbang'
                name='NamaGerbang'
                register={register}
                error={
                  errors.NamaGerbang != null ? errors.NamaGerbang.message : ""
                }
              />
            </div>
            <div className='flex flex-row gap-x-10 justify-center'>
              <CostumButton
                label='Batal'
                color='bg-slate-50'
                textColor='text-black'
                width='w-[15%]'
                type={undefined}
                onClik={onCancel}
              />
              <CostumButton
                label='Simpan'
                textColor='text-white'
                width='w-[15%]'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
