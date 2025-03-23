"use client"

import React from "react"
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
} from "@/components/icons/index"

interface NavItem {
  label: string
  href?: string
  icon: React.ReactNode
  subItems?: {
    label: string
    href: string
  }[]
}

const menuItems: NavItem[] = [
  {
    label: "Painel Inicial",
    href: "/painel",
    icon: <HomeIcon />
  },
  {
    label: "Gestão",
    icon: <HomeIcon />,
    subItems: [
      {
        label: "Usuários",
        href: "/gestao/usuarios"
      },
      {
        label: "Funções e Permissões",
        href: "/gestao/permissoes"
      },
      {
        label: "Ambientes",
        href: "/gestao/ambientes"
      },
      {
        label: "Formações",
        href: "/gestao/formacoes"
      },
      {
        label: "Cursos",
        href: "/gestao/cursos"
      },
      {
        label: "Eventos",
        href: "/gestao/eventos"
      },
      {
        label: "Comunicações",
        href: "/gestao/comunicacoes"
      }
    ]
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

export function Sidebar(): React.JSX.Element {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const renderMenuItem = (item: NavItem) => {
    const isExpanded = expandedItems.includes(item.label)
    const isActive = pathname === item.href

    return (
      <div key={item.label}>
        <button
          onClick={() => item.subItems && toggleExpand(item.label)}
          className={`flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
            isActive
              ? "bg-white/10"
              : "hover:bg-white/5"
          } ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? item.label : undefined}
        >
          <div className="flex items-center justify-center w-4 h-4 shrink-0">{item.icon}</div>
          {!isCollapsed && (
            <>
              <span className="truncate flex-1 text-left">{item.label}</span>
              {item.subItems && (
                <ChevronLeftIcon className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-90' : '-rotate-90'}`} />
              )}
            </>
          )}
        </button>
        
        {!isCollapsed && item.subItems && isExpanded && (
          <div className="ml-4 space-y-0.5 mt-0.5">
            {item.subItems.map(subItem => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-xs font-medium ${
                  pathname === subItem.href
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <span className="truncate">{subItem.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

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
          {menuItems.slice(0, 3).map(renderMenuItem)}

          <div className={`px-3 py-1 mt-1 ${isCollapsed ? 'px-0 text-center' : ''}`}>
            <span className="text-[10px] font-semibold uppercase text-white/60">Estude</span>
          </div>
          {menuItems.slice(3, 6).map(renderMenuItem)}

          <div className={`px-3 py-1 mt-1 ${isCollapsed ? 'px-0 text-center' : ''}`}>
            <span className="text-[10px] font-semibold uppercase text-white/60">Interaja</span>
          </div>
          {menuItems.slice(6, 8).map(renderMenuItem)}
        </div>

        <div className="space-y-0.5 px-2">
          {menuItems.slice(8).map(renderMenuItem)}
        </div>
      </div>
    </nav>
  )
} 