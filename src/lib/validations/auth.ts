import * as z from "zod"

export const loginSchema = z.object({
  email: z.string()
    .email("Email inválido")
    .min(1, "Email é obrigatório"),
  senha: z.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
}) 