'use client'

import { FC } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ContentLayout from '@/components/layout/ContentLayout'

const CustomersPage: FC = () => {
  return (
    <DashboardLayout>
      <ContentLayout
        header={
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Customers</h1>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg">
              Add Customer
            </button>
          </div>
        }
        toolbar={
          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search customers..."
              className="px-4 py-2 border rounded-lg w-64"
            />
            <div className="flex gap-2">
              <select className="px-4 py-2 border rounded-lg">
                <option>All Segments</option>
                <option>VIP</option>
                <option>Regular</option>
                <option>New</option>
              </select>
              <button className="px-4 py-2 border rounded-lg">
                Export
              </button>
            </div>
          </div>
        }
      >
        <div className="bg-white rounded-lg border min-h-[600px] p-6">
          Customer list will go here
        </div>
      </ContentLayout>
    </DashboardLayout>
  )
}

export default CustomersPage 