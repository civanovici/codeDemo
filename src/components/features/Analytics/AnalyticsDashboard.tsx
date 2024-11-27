'use client'

import { FC } from 'react'
import { DollarSign, ShoppingBag, Users, ArrowUpDown } from 'lucide-react'
import MetricCard from './MetricCard'

const metrics = [
  {
    title: 'Total Revenue',
    value: '$54,239',
    trend: 12.5,
    icon: DollarSign,
    trendLabel: 'vs last month',
    iconColor: 'bg-[#4CAF50]'
  },
  {
    title: 'Total Sales',
    value: '1,234',
    trend: 8.2,
    icon: ShoppingBag,
    trendLabel: 'vs last month',
    iconColor: 'bg-[#FF9800]'
  },
  {
    title: 'Active Customers',
    value: '892',
    trend: -2.4,
    icon: Users,
    trendLabel: 'vs last month',
    iconColor: 'bg-[#2196F3]'
  },
  {
    title: 'Conversion Rate',
    value: '2.4%',
    trend: 4.1,
    icon: ArrowUpDown,
    trendLabel: 'vs last month',
    iconColor: 'bg-[#9C27B0]'
  }
]

const AnalyticsDashboard: FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analytics Overview</h2>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#4CAF50]">
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="last3months">Last 3 Months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Revenue Chart Placeholder
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Sales Distribution</h3>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Sales Distribution Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard 