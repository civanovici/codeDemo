'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Search, Bell, Settings, Plus } from 'lucide-react'

const Header: FC = () => {
  return (
    <header className="h-16 fixed top-0 right-0 left-64 bg-white border-b px-6 flex items-center justify-between z-10">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4CAF50]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} className="text-gray-600" />
        </button>
        <button className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#43A047] transition-colors">
          <Plus size={20} />
          <span>Add Product</span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/200"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 