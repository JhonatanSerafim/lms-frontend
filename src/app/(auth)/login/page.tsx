import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F15A2B]">
      <LoginForm />
      <div className="absolute bottom-4 text-white text-sm">
        versão 1.0
      </div>
    </div>
  )
} 