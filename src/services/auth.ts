export interface LoginResponse {
  token: string
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch("http://localhost:8080/authuser/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error("Credenciais inválidas")
  }

  return response.json()
} 