'use client'

import { FC } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import AnalyticsDashboard from '@/components/features/Analytics/AnalyticsDashboard'

const StatisticsPage: FC = () => {
  return (
    <DashboardLayout>
      <AnalyticsDashboard />
    </DashboardLayout>
  )
}

export default StatisticsPage 