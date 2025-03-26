import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Sidebar />
      <main className="flex-1 p-20 ml-56 transition-all duration-300">
        {children}
      </main>
    </div>
  )
} 