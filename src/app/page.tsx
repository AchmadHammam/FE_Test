import { CostumButton } from "@/components/costumButton";
import { CostumInput } from "@/components/costumInput";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex justify-between">
        <form className="flex flex-col justify-center w-1/2 items-center ">
          <Image src="/book.svg" width={150} height={150} alt="logo" />
          <div className="w-1/2 items-center ">
            <CostumInput type="text" label="Username" />
            <CostumInput type="text" label="Password" />
            <CostumButton label="Login" width="w-1/4" pos="ml-[67%]" />
          </div>
        </form>
        <div className="bg-gray-500 min-h-screen w-1/2 flex justify-center items-center bg-fixed"></div>
      </div>
    </div>
  );
}
