'use client'

import { FC } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ContentLayout from '@/components/layout/ContentLayout'

const TransactionsPage: FC = () => {
  return (
    <DashboardLayout>
      <ContentLayout
        header={
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Transactions</h1>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg">
              Export Data
            </button>
          </div>
        }
        toolbar={
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search transactions..."
                className="px-4 py-2 border rounded-lg w-64"
              />
              <select className="px-4 py-2 border rounded-lg">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                type="date"
                className="px-4 py-2 border rounded-lg"
              />
              <button className="px-4 py-2 border rounded-lg">
                Filter
              </button>
            </div>
          </div>
        }
      >
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="min-h-[600px] p-6">
            Transaction table will go here
          </div>
        </div>
      </ContentLayout>
    </DashboardLayout>
  )
}

export default TransactionsPage 