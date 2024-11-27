'use client'

import { FC } from 'react'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  trend: number
  icon: LucideIcon
  trendLabel: string
  iconColor: string
}

const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  trend,
  icon: Icon,
  trendLabel,
  iconColor
}) => {
  const isPositive = trend > 0

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 font-medium">{title}</span>
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="flex items-center gap-2">
          <span className={`flex items-center text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          <span className="text-gray-500 text-sm">
            {trendLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MetricCard 