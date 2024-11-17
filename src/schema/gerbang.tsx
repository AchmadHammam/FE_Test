import { z } from "zod";

export const GerbangValidation = z.object({
  id: z.number({ message: "id rquired" }),
  IdCabang: z.number({ message: "IdCabang rquired" }),
  NamaGerbang: z.string().min(1, { message: "Nama Gerbang required" }),
  NamaCabang: z.string().min(1, { message: "Nama Cabang required" }),
});

export type GerbangType = z.infer<typeof GerbangValidation>;
