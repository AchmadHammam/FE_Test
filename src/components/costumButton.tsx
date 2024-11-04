interface CostumButtonType {
  label: string;
  width?: string;
  pos?: string;
}

export const CostumButton: React.FC<CostumButtonType> = ({
  label,
  width,
  pos,
}) => {
  return (
    <div
      className={`bg-gray-950 text-white text-center border border-gray-800 rounded-md my-5 p-2 ${width} ${pos} cursor-pointer`}
    >
      {label}
    </div>
  );
};
