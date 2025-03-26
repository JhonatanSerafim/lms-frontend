const API_URL = 'http://localhost:8080'

interface ApiError {
  status: number
  message: string
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    const error: ApiError = {
      status: response.status,
      message: response.statusText
    }

    throw error
  }

  return response.json()
}

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('token')
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json'
  }

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  }

  const response = await fetch(`${API_URL}${endpoint}`, config)
  return handleResponse<T>(response)
}

// Funções auxiliares para métodos HTTP comuns
export const http = {
  get: <T>(endpoint: string, options?: RequestInit) => 
    api<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, data: unknown, options?: RequestInit) =>
    api<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    }),
    
  put: <T>(endpoint: string, data: unknown, options?: RequestInit) =>
    api<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    }),
    
  delete: <T>(endpoint: string, options?: RequestInit) =>
    api<T>(endpoint, { ...options, method: 'DELETE' })
} 