"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { newUserSchema } from "@/lib/validations/user"

type NewUserForm = z.infer<typeof newUserSchema>

export function NewUserForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<NewUserForm>({
    resolver: zodResolver(newUserSchema),
  })

  async function onSubmit(data: NewUserForm) {
    setIsLoading(true)
    try {
      // TODO: Implementar integração com API
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Novo Usuário</h1>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Dados Pessoais */}
        <div className="space-y-4">
          <h2 className="text-[#F15A2B] font-medium">Dados Pessoais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <Label htmlFor="nomeCompleto">Nome Completo</Label>
              <Input
                {...form.register("nomeCompleto")}
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
              />
              {form.formState.errors.nomeCompleto && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.nomeCompleto.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                {...form.register("cpf")}
                id="cpf"
                placeholder="000.000.000-00"
                maxLength={11}
              />
              {form.formState.errors.cpf && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.cpf.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="dataNascimento">Data de Nascimento</Label>
              <div className="relative">
                <Input
                  {...form.register("dataNascimento")}
                  id="dataNascimento"
                  type="date"
                  className="w-full"
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              {form.formState.errors.dataNascimento && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.dataNascimento.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                {...form.register("email")}
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                {...form.register("telefone")}
                id="telefone"
                placeholder="(00) 00000-0000"
              />
              {form.formState.errors.telefone && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.telefone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="space-y-4">
          <h2 className="text-[#F15A2B] font-medium">Endereço</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <Label htmlFor="cep">CEP</Label>
              <Input
                {...form.register("cep")}
                id="cep"
                placeholder="00000-000"
              />
              {form.formState.errors.cep && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.cep.message}
                </p>
              )}
            </div>

            <div className="md:col-span-4">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                {...form.register("endereco")}
                id="endereco"
                placeholder="Digite seu endereço"
              />
              {form.formState.errors.endereco && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.endereco.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="numero">Número</Label>
              <Input
                {...form.register("numero")}
                id="numero"
                placeholder="Nº"
              />
              {form.formState.errors.numero && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.numero.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                {...form.register("cidade")}
                id="cidade"
                placeholder="Digite sua cidade"
              />
              {form.formState.errors.cidade && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.cidade.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                {...form.register("bairro")}
                id="bairro"
                placeholder="Digite seu bairro"
              />
              {form.formState.errors.bairro && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.bairro.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="estado">Estado</Label>
              <Input
                {...form.register("estado")}
                id="estado"
                placeholder="UF"
                maxLength={2}
              />
              {form.formState.errors.estado && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.estado.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="complemento">Complemento (opcional)</Label>
              <Input
                {...form.register("complemento")}
                id="complemento"
                placeholder="Ex: Apto 101"
              />
            </div>
          </div>
        </div>

        {/* Acesso */}
        <div className="space-y-4">
          <h2 className="text-[#F15A2B] font-medium">Acesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input
                {...form.register("senha")}
                id="senha"
                type="password"
                placeholder="Digite sua senha"
              />
              {form.formState.errors.senha && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.senha.message}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Após o cadastro, enviaremos um e-mail para o endereço registrado, permitindo
                que o usuário redefina a senha.
              </p>
            </div>

            <div>
              <Label htmlFor="permissao">Permissão</Label>
              <Select onValueChange={(value) => form.setValue("permissao", value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma permissão" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aluno(a)">Aluno(a)</SelectItem>
                  <SelectItem value="Professor(a)">Professor(a)</SelectItem>
                  <SelectItem value="Administrador(a)">Administrador(a)</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.permissao && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.permissao.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-32"
            onClick={() => window.history.back()}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="w-32 bg-[#F15A2B] hover:bg-[#d14d24]"
            disabled={isLoading}
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </div>
      </form>
    </div>
  )
} 