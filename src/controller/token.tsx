"use server";
import { cookies } from "next/headers";

export async function SaveToken(token: string): Promise<boolean> {
  const cookiesStore = await cookies();

  cookiesStore.set("token", token);
  if (cookiesStore.has("token")) {
    return true;
  } else {
    return false;
  }
}

export async function GetToken(): Promise<string | undefined> {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  return token?.value;
}
