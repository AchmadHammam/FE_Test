/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";

interface CostumInputType {
  type: HTMLInputTypeAttribute;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CostumInput: React.FC<CostumInputType> = ({
  type,
  label,
  onChange,
}) => {
  return (
    <div className="flex w-full flex-col gap-2 py-2">
      <label className="mx-10">{label}</label>
      <input
        className="bg-gray-400 p-2 mx-10 border border-gray-800 rounded-md text-black"
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
