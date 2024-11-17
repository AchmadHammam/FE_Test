import { useEffect } from "react";
import { CostumButton } from "../costumButton";
import { GerbangType } from "@/schema/gerbang";
import { useRouter } from "next/navigation";

interface DialogDeleteGerbangType {
  open: boolean;
  title: string;
  gerbang: Gerbang;
  onClose: () => void;
}
export const DialogDeleteGerbang: React.FC<DialogDeleteGerbangType> = ({
  open,
  title,
  gerbang,
  onClose,
}) => {
  const router = useRouter();

  const handleOutsideClick = (event: MouseEvent) => {
    if ((event.target! as HTMLElement).id! === "modal-background-detail") {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });
  const onDelete = async (data: GerbangType) => {
    const res = await fetch("http://localhost:8080/api/gerbangs", {
      method: "DELETE",
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

  if (!open) {
    return null;
  }
  return (
    <div
      id='modal-background'
      className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
    >
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full'>
        <div className='text-xl font-bold mb-4 text-center'>{title}</div>
        <div className="text-center">{`Apakah anda yakin ingin meghapus data ${gerbang.NamaCabang}`}</div>
        <div className='flex flex-row gap-x-10 justify-center'>
          <CostumButton
            label='Tidak'
            color='bg-slate-50'
            textColor='text-black'
            width='w-[15%]'
            type={undefined}
            onClik={onCancel}
          />
          <CostumButton
            label='Ya'
            textColor='text-white'
            width='w-[15%]'
            type={undefined}
            onClik={() => {
              onDelete(gerbang);
            }}
          />
        </div>
      </div>
    </div>
  );
};
