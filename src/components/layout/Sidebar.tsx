'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Package, 
  MessageSquare, 
  Receipt 
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, href: '/' },
  { label: 'Statistics', icon: BarChart2, href: '/statistics' },
  { label: 'Customers', icon: Users, href: '/customers' },
  { label: 'Products', icon: Package, href: '/product' },
  { label: 'Messages', icon: MessageSquare, href: '/messages' },
  { label: 'Transactions', icon: Receipt, href: '/transactions' },
  { label: 'Demo Table', icon: LayoutDashboard, href: '/demo-table' },
]

const Sidebar: FC = () => {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-[#0A2818] text-white fixed left-0 top-0 p-4">
      <div className="flex items-center gap-2 mb-8 px-4">
        <h1 className="text-xl font-bold">Sales Admin</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar 