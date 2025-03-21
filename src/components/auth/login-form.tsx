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
import { Label } from "@/components/ui/label"

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
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
    <div className="flex flex-col items-center gap-8">
      <Image
        src="/logo.svg"
        alt="Zouphy"
        width={200}
        height={80}
        priority
      />
      <Card className="w-[496px] p-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="space-y-1 px- pt-6">
            <h1 className="text-[#F15A2B] text-3xl font-bold">Login</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Ainda não possui uma conta?</span>
              <a href="#" className="text-sm text-[#F15A2B] hover:underline font-medium">
                Crie aqui
              </a>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 px-6 pt-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                {...form.register("email")}
                id="email"
                type="email"
                placeholder="Digite seu email"
                disabled={isLoading}
                className="h-12 px-4"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha" className="text-sm font-medium text-gray-700">Senha</Label>
              <div className="relative">
                <Input
                  {...form.register("senha")}
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Insira sua senha"
                  disabled={isLoading}
                  className="h-12 px-4"
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
              <div className="text-right pt-1">
                <a href="#" className="text-sm text-gray-900 hover:underline">
                  Esqueci minha senha
                </a>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-8">
            <Button
              type="submit"
              className="w-full bg-[#F15A2B] hover:bg-[#d14d24] h-12 text-base"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
} 