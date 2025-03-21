"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { loginSchema } from "@/lib/validations/auth"

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      cpf: "",
      senha: "",
    },
  })

  async function onSubmit(data: LoginForm) {
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
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Image
            src="/logo-white.svg"
            alt="Zouphy"
            width={200}
            height={80}
            priority
          />
        </div>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              {...form.register("cpf")}
              type="text"
              placeholder="Digite seu CPF"
              disabled={isLoading}
              maxLength={11}
            />
            {form.formState.errors.cpf && (
              <p className="text-sm text-red-500">
                {form.formState.errors.cpf.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Input
                {...form.register("senha")}
                type={showPassword ? "text" : "password"}
                placeholder="Insira sua senha"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {form.formState.errors.senha && (
              <p className="text-sm text-red-500">
                {form.formState.errors.senha.message}
              </p>
            )}
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Esqueci minha senha
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full bg-[#F15A2B] hover:bg-[#d14d24]"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
          <p className="text-sm text-center text-gray-500">
            Ainda não possui uma conta?{" "}
            <a href="#" className="text-[#F15A2B] hover:underline">
              Crie aqui
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
} 