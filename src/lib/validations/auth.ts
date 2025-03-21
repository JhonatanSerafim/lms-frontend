import * as z from "zod"

export const loginSchema = z.object({
  cpf: z.string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  senha: z.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
}) 