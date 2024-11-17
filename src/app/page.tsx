"use client";

import { CostumButton } from "@/components/costumButton";
import { CostumInput } from "@/components/costumInput";
import Image from "next/image";
import { LoginType, LoginValidation } from "../schema/login";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SaveToken } from "@/controller/token";

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({ resolver: zodResolver(LoginValidation) });

  const onSubmit = async (data: LoginType) => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    const json: loginResponse = await res.json();
    const token = json.token;
    if (token) {
      const success = await SaveToken(token);
      if (success) {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-center'>
      <div className='flex justify-between'>
        <form
          className='flex flex-col justify-center w-1/2 items-center '
          onSubmit={handleSubmit(onSubmit)}
        >
          <Image src='/book.svg' width={150} height={150} alt='logo' />
          <div className='w-1/2 items-center '>
            <CostumInput
              type='text'
              label='Username'
              name='username'
              register={register}
              error={errors.username != null ? errors.username.message : ""}
            />
            <CostumInput
              type='password'
              name='password'
              label='Password'
              register={register}
              error={errors.password != null ? errors.password.message : ""}
            />
            <CostumButton
              label='Login'
              width='w-1/4'
              pos='ml-[67%]'
              type='submit'
            />
          </div>
        </form>
        <div className='bg-gray-500 min-h-screen w-1/2 flex justify-center items-center bg-fixed'></div>
      </div>
    </div>
  );
}
