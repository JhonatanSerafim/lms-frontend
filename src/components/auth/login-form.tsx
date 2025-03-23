"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { login } from "@/services/auth"
import { loginSchema } from "@/lib/validations/auth"
import type { z } from "zod"

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await login(data.email, data.password)
      localStorage.setItem("token", response.token)
      router.push("/painel")
    } catch (error) {
      form.setError("root", {
        message: "Credenciais inválidas",
      })
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#F15A2B]">
      <div className="mb-14">
        <Image
          src="/images/logo-white.svg"
          alt="Zouphy"
          width={160}
          height={32}
          className="h-auto w-auto"
          priority
        />
      </div>

      <div className="w-[480px] rounded-2xl bg-white p-8">
        <h1 className="mb-1 text-[28px] font-bold text-[#F15A2B]">Login</h1>
        
        <div className="mb-4 text-base">
          Ainda não possui uma conta?{" "}
          <Link href="/register" className="font-medium text-[#F15A2B] hover:underline">
            Crie aqui
          </Link>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-4 space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-base font-medium text-gray-900">
              E-mail
            </label>
            <input
              {...form.register("email")}
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="h-[44px] w-[400px] rounded-[6px] border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#F15A2B] focus:outline-none focus:ring-1 focus:ring-[#F15A2B]"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-base font-medium text-gray-900">
              Senha
            </label>
            <input
              {...form.register("password")}
              type="password"
              id="password"
              placeholder="Insira sua senha"
              className="h-[44px] w-[400px] rounded-[6px] border border-gray-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#F15A2B] focus:outline-none focus:ring-1 focus:ring-[#F15A2B]"
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end w-[400px]">
            <Link href="/esqueci-senha" className="text-sm text-[#F15A2B] hover:underline">
              Esqueci minha senha
            </Link>
          </div>

          {form.formState.errors.root && (
            <p className="text-center text-sm text-red-500">
              {form.formState.errors.root.message}
            </p>
          )}

          <button
            type="submit"
            className="h-[44px] w-[400px] rounded-[6px] bg-[#F15A2B] text-base font-medium text-white transition-colors hover:bg-[#D14A1B] focus:outline-none focus:ring-2 focus:ring-[#F15A2B] focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>
      </div>

      <div className="mt-14 text-white text-sm">
        versão 1.0
      </div>
    </div>
  )
} 