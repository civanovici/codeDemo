'use client'

import { FC, useMemo, useState } from 'react'
import { ColumnDef, RowSelectionState } from '@tanstack/react-table'
import DataTable from '@/components/shared/DataTable'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PackData, mockPackData } from '@/data/mockPackData'

const DemoTablePage: FC = () => {
  const [data, setData] = useState<PackData[]>(mockPackData)
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const handleNumberChange = (
    packType: string,
    field: keyof Omit<PackData, 'packType' | 'includeInOrders'>,
    value: string
  ) => {
    setData(prev =>
      prev.map(item =>
        item.packType === packType
          ? { ...item, [field]: parseInt(value) || 0 }
          : item
      )
    )
  }

  const handleCheckboxChange = (packType: string, checked: boolean) => {
    setData(prev =>
      prev.map(item =>
        item.packType === packType
          ? { ...item, includeInOrders: checked }
          : item
      )
    )
  }

  const handleSave = () => {
    const selectedRows = data.filter((_, index) => rowSelection[index])
    console.log('All data:', data)
    console.log('Selected rows:', selectedRows)
  }

  const columns = useMemo<ColumnDef<PackData>[]>(
    () => [
      {
        header: 'Pack Type',
        accessorKey: 'packType',
        size: 100,
      },
      {
        header: 'Initial Quantity',
        accessorKey: 'initialQuantity',
        size: 120,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.initialQuantity}
            onChange={(e) => handleNumberChange(row.original.packType, 'initialQuantity', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Min Order Quantity',
        accessorKey: 'minOrderQuantity',
        size: 150,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.minOrderQuantity}
            onChange={(e) => handleNumberChange(row.original.packType, 'minOrderQuantity', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Max Order Quantity',
        accessorKey: 'maxOrderQuantity',
        size: 150,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.maxOrderQuantity}
            onChange={(e) => handleNumberChange(row.original.packType, 'maxOrderQuantity', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Min Buffer',
        accessorKey: 'minBuffer',
        size: 120,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.minBuffer}
            onChange={(e) => handleNumberChange(row.original.packType, 'minBuffer', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Max Buffer',
        accessorKey: 'maxBuffer',
        size: 120,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.maxBuffer}
            onChange={(e) => handleNumberChange(row.original.packType, 'maxBuffer', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Short Window',
        accessorKey: 'shortWindow',
        size: 120,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.shortWindow}
            onChange={(e) => handleNumberChange(row.original.packType, 'shortWindow', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Long Window',
        accessorKey: 'longWindow',
        size: 120,
        cell: ({ row }) => (
          <input
            type="number"
            value={row.original.longWindow}
            onChange={(e) => handleNumberChange(row.original.packType, 'longWindow', e.target.value)}
            className="w-full px-2 py-1 border rounded"
            min={0}
          />
        ),
      },
      {
        header: 'Include in Orders',
        accessorKey: 'includeInOrders',
        size: 120,
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.original.includeInOrders}
            onChange={(e) => handleCheckboxChange(row.original.packType, e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        ),
      },
    ],
    []
  )

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pack Configuration</h1>
          <div className="flex gap-2">
            <span className="text-gray-600 self-center">
              {Object.keys(rowSelection).length} rows selected
            </span>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
        <DataTable
          data={data}
          columns={columns}
          rowSelection={rowSelection}
          onRowSelectionChange={setRowSelection}
        />
      </div>
    </DashboardLayout>
  )
}

export default DemoTablePage 