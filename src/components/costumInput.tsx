import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

interface CostumInputType {
  type: HTMLInputTypeAttribute;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: string;
}

export const CostumInput: React.FC<CostumInputType> = ({
  type,
  label,
  error,
  register,
}) => {
  return (
    <div className="flex w-full flex-col gap-2 py-2">
      <label className="mx-10">{label}</label>
      <input
        className="bg-gray-400 p-2 mx-10 border border-gray-800 rounded-md text-black "
        type={type}
        {...register(label?.toLocaleLowerCase())}
      />
      <div className=" text-red-500 mx-10 text-base">{error}</div>
    </div>
  );
};
