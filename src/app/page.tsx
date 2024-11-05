"use client";

import { CostumButton } from "@/components/costumButton";
import { CostumInput } from "@/components/costumInput";
import Image from "next/image";
import { LoginType, LoginValidation } from "../schema/login";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({ resolver: zodResolver(LoginValidation) });

  const onSubmit = (data: LoginType) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex justify-between">
        <form
          className="flex flex-col justify-center w-1/2 items-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          <Image src="/book.svg" width={150} height={150} alt="logo" />
          <div className="w-1/2 items-center ">
            <CostumInput
              type="text"
              label="Username"
              register={register}
              error={errors.username != null ? errors.username.message : ""}
            />
            <CostumInput
              type="password"
              label="Password"
              register={register}
              error={errors.password != null ? errors.password.message : ""}
            />
            <CostumButton label="Login" width="w-1/4" pos="ml-[67%]" />
          </div>
        </form>
        <div className="bg-gray-500 min-h-screen w-1/2 flex justify-center items-center bg-fixed"></div>
      </div>
    </div>
  );
}
