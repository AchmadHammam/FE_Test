import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex justify-end">
        <form className="flex flex-col justify-start">
          <Image src="/book.svg" width={100} height={100} alt="logo" />
          <input type=""/>
        </form>
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center"></div>
      </div>
    </div>
  );
}
