import * as z from "zod"

export const newUserSchema = z.object({
  // Dados Pessoais
  nomeCompleto: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  
  // Endereço
  cep: z.string().min(8, "CEP inválido"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  numero: z.string().min(1, "Número é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  estado: z.string().length(2, "Estado deve ter 2 caracteres"),
  complemento: z.string().optional(),

  // Acesso
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  permissao: z.enum(["Aluno(a)", "Professor(a)", "Administrador(a)"],{
    required_error: "Escolha uma permissão",
  }),
}) 