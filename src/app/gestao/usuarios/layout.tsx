import { Sidebar } from "@/components/layout/sidebar"

interface PainelLayoutProps {
  children: React.ReactNode
}

export default function PainelLayout({ children }: PainelLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 ml-56 transition-all duration-300">{children}</main>
    </div>
  )
} 