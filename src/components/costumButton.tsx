import { ButtonHTMLAttributes } from "react";

interface CostumButtonType {
  label: string;
  width?: string;
  pos?: string;
  color?: string;
  textColor?: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClik?: () => void;
}

export const CostumButton: React.FC<CostumButtonType> = ({
  label,
  width,
  pos,
  color,
  textColor,
  type,
  onClik,
}) => {
  if (color == null || color == undefined) {
    color = "bg-gray-950";
  }
  if (textColor == null || textColor == undefined) {
    textColor = "text-white ";
  }
  return (
    <button
      type={type}
      className={`${color}  ${textColor} text-center border border-gray-800 rounded-md my-5 p-2 ${width} ${pos} cursor-pointer`}
      onClick={type === undefined ? onClik : undefined}
    >
      {label}
    </button>
  );
};
