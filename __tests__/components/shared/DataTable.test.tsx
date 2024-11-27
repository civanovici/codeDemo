import { render, screen, fireEvent } from '@testing-library/react'
import DataTable from '@/components/shared/DataTable'
import { mockPackData } from '@/data/mockPackData'
import { ColumnDef } from '@tanstack/react-table'

describe('DataTable', () => {
  const columns: ColumnDef<any, any>[] = [
    {
      header: 'Pack Type',
      accessorKey: 'packType',
    },
    {
      header: 'Initial Quantity',
      accessorKey: 'initialQuantity',
    },
  ]

  it('renders table with data', () => {
    render(<DataTable data={mockPackData} columns={columns} rowSelection={{}} />)
    
    // Check if headers are rendered
    expect(screen.getByText('Pack Type')).toBeInTheDocument()
    expect(screen.getByText('Initial Quantity')).toBeInTheDocument()
    
    // Check if data is rendered
    expect(screen.getByText('A.01')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('shows error messages for rows with errors', () => {
    render(<DataTable data={mockPackData} columns={columns} rowSelection={{}} />)
    
    // Check if error messages are displayed
    expect(screen.getByText('Initial quantity is below recommended threshold')).toBeInTheDocument()
    expect(screen.getByText('Buffer range might be insufficient for demand')).toBeInTheDocument()
  })

  it('handles row selection', () => {
    const onRowSelectionChange = jest.fn()
    render(
      <DataTable
        data={mockPackData}
        columns={columns}
        rowSelection={{}}
        onRowSelectionChange={onRowSelectionChange}
      />
    )
    
    // Find and click the first row's checkbox
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[1]) // First row checkbox (index 0 is header)
    
    expect(onRowSelectionChange).toHaveBeenCalled()
  })

  it('handles select all', () => {
    const onRowSelectionChange = jest.fn()
    render(
      <DataTable
        data={mockPackData}
        columns={columns}
        rowSelection={{}}
        onRowSelectionChange={onRowSelectionChange}
      />
    )
    
    // Find and click the select all checkbox
    const selectAllCheckbox = screen.getAllByRole('checkbox')[0]
    fireEvent.click(selectAllCheckbox)
    
    expect(onRowSelectionChange).toHaveBeenCalled()
  })
}) 