import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

interface SearchBarType {
  className?: string;
  value?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarType> = ({
  className,
  onchange,
  value,
}) => {
  return (
    <div className={`${className}`}>
      <div className='w-[125%] h-11 flex flex-row items-center bg-gray-400 border border-gray-800 rounded-md gap-2 px-2  '>
        <HiOutlineMagnifyingGlass size={25} />
        <input
          className='p-2 focus:outline-none bg-gray-400 text-black w-full  '
          placeholder='Search'
          onChange={onchange}
          value={value}
        ></input>
      </div>
    </div>
  );
};
