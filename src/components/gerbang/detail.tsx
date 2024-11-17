import React, { useEffect } from "react";
import { CostumInput } from "../costumInput";
import { GerbangType, GerbangValidation } from "@/schema/gerbang";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface DialogDetailGerbangType {
  open: boolean;
  title: string;
  gerbang: Gerbang | null;
  onClose: (gerbang: Gerbang | null) => void;
}
export const DialogDetailGerbang: React.FC<DialogDetailGerbangType> = ({
  open,
  title,
  gerbang,
  onClose,
}) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if ((event.target! as HTMLElement).id! === "modal-background-detail") {
      onClose(gerbang);
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
    formState: { errors },
    reset,
  } = useForm<GerbangType>({
    resolver: zodResolver(GerbangValidation),
    defaultValues: {
      NamaCabang: "",
      NamaGerbang: "",
      id: 0,
      IdCabang: 0,
    },
  });
  useEffect(() => {
    reset({
      NamaGerbang: gerbang?.NamaGerbang,
      NamaCabang: gerbang?.NamaCabang,
      id: gerbang?.id,
      IdCabang: gerbang?.IdCabang,
    });
  }, [
    gerbang?.IdCabang,
    gerbang?.NamaCabang,
    gerbang?.NamaGerbang,
    gerbang?.id,
    reset,
  ]);

  if (!open) {
    return null;
  }

  return (
    <div
      id='modal-background-detail'
      className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
    >
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full'>
        <div className='text-xl font-bold mb-4 text-center'>{title}</div>
        <div>
          <form>
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
          </form>
        </div>
      </div>
    </div>
  );
};
