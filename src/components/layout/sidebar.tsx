"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  HomeIcon,
  BookIcon,
  CertificateIcon,
  GraduationIcon,
  MonitorIcon,
  ClockIcon,
  CommunityIcon,
  VideoIcon,
  SettingsIcon,
  HelpIcon,
  LogoutIcon,
  ChevronLeftIcon,
  ArrowLeftIcon
} from "@/components/icons"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

const menuItems: NavItem[] = [
  {
    label: "Painel Inicial",
    href: "/painel",
    icon: <HomeIcon />
  },
  {
    label: "Meus Cursos",
    href: "/cursos",
    icon: <BookIcon />
  },
  {
    label: "Meus Certificados",
    href: "/certificados",
    icon: <CertificateIcon />
  },
  {
    label: "Formações",
    href: "/formacoes",
    icon: <GraduationIcon />
  },
  {
    label: "Cursos",
    href: "/cursos-disponiveis",
    icon: <MonitorIcon />
  },
  {
    label: "Simulados",
    href: "/simulados",
    icon: <ClockIcon />
  },
  {
    label: "Comunidade",
    href: "/comunidade",
    icon: <CommunityIcon />
  },
  {
    label: "Eventos Ao Vivo",
    href: "/eventos",
    icon: <VideoIcon />
  },
  {
    label: "Configurações",
    href: "/configuracoes",
    icon: <SettingsIcon />
  },
  {
    label: "Ajuda",
    href: "/ajuda",
    icon: <HelpIcon />
  },
  {
    label: "Sair",
    href: "/logout",
    icon: <LogoutIcon />
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 flex h-screen flex-col bg-[#F15A2B] text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'}`}>
      <div className="flex h-12 items-center justify-between px-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center justify-between"
        >
          {!isCollapsed ? (
            <>
              <Image
                src="/images/logo-white.svg"
                alt="Zouphy"
                width={100}
                height={24}
                className="h-6 w-24"
                priority
              />
              <ArrowLeftIcon className="text-white/60 hover:text-white h-4 w-4" />
            </>
          ) : (
            <Image
              src="/images/simbolo.svg"
              alt="Zouphy"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          )}
        </button>
      </div>

      <div className={`flex items-center gap-2 px-4 py-2 border-b border-white/10 ${isCollapsed ? 'justify-center px-2' : ''}`}>
        <div className="h-6 w-6 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Avatar do usuário"
            width={24}
            height={24}
            className="h-full w-full object-cover"
          />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-xs font-medium truncate">Melissa Arantes dos Santos</span>
            <span className="text-[10px] text-white/60">ESTUDANTE</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 justify-between py-2">
        <div className="space-y-0.5">
          <div className={`px-3 py-1 ${isCollapsed ? 'px-0 text-center' : ''}`}>
            <span className="text-[10px] font-semibold uppercase text-white/60">Menu</span>
          </div>
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
                pathname === item.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="flex items-center justify-center w-4 h-4 shrink-0">{item.icon}</div>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          ))}

          <div className={`px-3 py-1 mt-1 ${isCollapsed ? 'px-0 text-center' : ''}`}>
            <span className="text-[10px] font-semibold uppercase text-white/60">Estude</span>
          </div>
          {menuItems.slice(3, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
                pathname === item.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="flex items-center justify-center w-4 h-4 shrink-0">{item.icon}</div>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          ))}

          <div className={`px-3 py-1 mt-1 ${isCollapsed ? 'px-0 text-center' : ''}`}>
            <span className="text-[10px] font-semibold uppercase text-white/60">Interaja</span>
          </div>
          {menuItems.slice(6, 8).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
                pathname === item.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="flex items-center justify-center w-4 h-4 shrink-0">{item.icon}</div>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="space-y-0.5 px-2">
          {menuItems.slice(8).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
                pathname === item.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              } ${isCollapsed ? 'justify-center px-2' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="flex items-center justify-center w-4 h-4 shrink-0">{item.icon}</div>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 