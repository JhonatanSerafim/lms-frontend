"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { MoreVertical, Plus, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { UsersIcon } from "@/components/icons"

interface User {
  id: string
  name: string
  cpf: string
  permission: string
  createdAt: string
  avatar: string
}

const users: User[] = [
  {
    id: "1",
    name: "Denis Barboza da Silva",
    cpf: "265.568.565-85",
    permission: "Aluno(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  },
  {
    id: "2",
    name: "Melissa Arantes dos Santos",
    cpf: "265.568.565-85",
    permission: "Aluno(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  },
  {
    id: "3",
    name: "João Henrique Rocha",
    cpf: "265.568.565-85",
    permission: "Administrador(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  },
  {
    id: "4",
    name: "Francisco Tavares",
    cpf: "265.568.565-85",
    permission: "Professor(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  },
  {
    id: "5",
    name: "Bárbara Machado de Oliveira",
    cpf: "265.568.565-85",
    permission: "Aluno(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  },
  {
    id: "6",
    name: "Douglas José dos Santos",
    cpf: "265.568.565-85",
    permission: "Professor(a)",
    createdAt: "00/00/0000",
    avatar: "/images/avatar.png"
  }
]

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10">
            <UsersIcon className="w-6 h-6" />
          </div>
          <h1 className="text-[32px] font-medium text-zinc-900">Usuários</h1>
        </div>
        <p className="text-base text-zinc-500">
          Crie ou gerencie todos os usuários da plataforma.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative flex-1 max-w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            type="search"
            placeholder="Digite algo para pesquisar"
            className="pl-9"
          />
        </div>
        <Link href="/gestao/cadastro">
          <Button className="gap-2 bg-amber-600">
            <Plus className="h-4 w-4" />
            Novo Usuário
          </Button>
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="text-left py-4 px-4 font-medium text-sm text-zinc-900">Nome</th>
              <th className="text-left py-4 px-4 font-medium text-sm text-zinc-900">CPF</th>
              <th className="text-left py-4 px-4 font-medium text-sm text-zinc-900">Permissão</th>
              <th className="text-left py-4 px-4 font-medium text-sm text-zinc-900">Data de Criação</th>
              <th className="py-4 px-4 font-medium text-sm text-zinc-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-zinc-200 last:border-0">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                    </Avatar>
                    <span className="text-sm text-zinc-900">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-zinc-900">{user.cpf}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-zinc-900">{user.permission}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-zinc-900">{user.createdAt}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-end">
                    <button className="p-1 hover:bg-zinc-50 rounded">
                      <MoreVertical className="h-4 w-4 text-zinc-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-zinc-50 rounded disabled:opacity-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15.8334L6.66667 10L12.5 4.16669" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex items-center">
            <button className="w-8 h-8 text-sm rounded hover:bg-zinc-50">1</button>
            <button className="w-8 h-8 text-sm rounded bg-orange-500 text-white">2</button>
            <button className="w-8 h-8 text-sm rounded hover:bg-zinc-50">3</button>
            <button className="w-8 h-8 text-sm rounded hover:bg-zinc-50">4</button>
            <button className="w-8 h-8 text-sm rounded hover:bg-zinc-50">5</button>
          </div>

          <button className="p-1 hover:bg-zinc-50 rounded">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 4.16669L13.3333 10L7.5 15.8334" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">Ir para</span>
          <input
            type="number"
            className="w-12 rounded border border-zinc-200 px-2 py-1 text-sm text-zinc-900"
            min={1}
            max={5}
          />
        </div>
      </div>
    </div>
  )
}