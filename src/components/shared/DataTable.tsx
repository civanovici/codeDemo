'use client'

import { FC, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  RowSelectionState,
} from '@tanstack/react-table'
import { AlertCircle } from 'lucide-react'

interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData, any>[]
  rowSelection?: RowSelectionState
  onRowSelectionChange?: (value: RowSelectionState) => void
}

const DataTable = <TData extends { errors?: { message: string }[] },>({
  data,
  columns,
  rowSelection,
  onRowSelectionChange,
}: DataTableProps<TData>) => {
  const selectionColumn = useMemo<ColumnDef<TData, any>>(
    () => ({
      id: 'select',
      size: 40,
      header: ({ table }) => (
        <div className="px-1">
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            ref={(el) => {
              if (el) {
                el.indeterminate = table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
            }}
            onChange={table.getToggleAllRowsSelectedHandler()}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </div>
      ),
    }),
    []
  )

  const errorColumn = useMemo<ColumnDef<TData, any>>(
    () => ({
      id: 'error',
      size: 40,
      header: '',
      cell: ({ row }) => {
        if (!row.original.errors?.length) return null
        
        return (
          <div className="p-1 text-red-500">
            <AlertCircle size={16} />
          </div>
        )
      },
    }),
    []
  )

  const allColumns = useMemo(
    () => [selectionColumn, errorColumn, ...columns],
    [selectionColumn, errorColumn, columns]
  )

  const table = useReactTable({
    data,
    columns: allColumns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
  })

  const renderRows = () => {
    const rows: JSX.Element[] = []

    table.getRowModel().rows.forEach((row, index) => {
      // Add the data row
      rows.push(
        <tr key={row.id} className="border-b bg-white hover:bg-gray-50">
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className="px-4 py-3">
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </td>
          ))}
        </tr>
      )

      // Add error rows if any
      if (row.original.errors?.length) {
        row.original.errors.forEach((error, errorIndex) => {
          rows.push(
            <tr key={`${row.id}-error-${errorIndex}`} className="bg-red-50 border-b border-red-100">
              <td colSpan={row.getVisibleCells().length} className="px-4 py-2">
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={14} />
                  <span>{error.message}</span>
                </div>
              </td>
            </tr>
          )
        })
      }
    })

    return rows
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-3 font-medium text-gray-700"
                  style={{ width: header.getSize() }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable 