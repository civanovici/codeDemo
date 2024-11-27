'use client'

import { FC } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ContentLayout from '@/components/layout/ContentLayout'

const ProductPage: FC = () => {
  return (
    <DashboardLayout>
      <ContentLayout
        header={
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Products</h1>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg">
              Add Product
            </button>
          </div>
        }
        toolbar={
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 border rounded-lg w-64"
              />
              <select className="px-4 py-2 border rounded-lg">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Food</option>
              </select>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border rounded-lg">
                <option>In Stock</option>
                <option>Out of Stock</option>
                <option>Low Stock</option>
              </select>
              <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
                Grid View
              </button>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product grid placeholder */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg border p-4">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
              <h3 className="font-semibold">Product {i + 1}</h3>
              <p className="text-gray-500">Category</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold">$99.99</span>
                <span className="text-green-600">In Stock</span>
              </div>
            </div>
          ))}
        </div>
      </ContentLayout>
    </DashboardLayout>
  )
}

export default ProductPage 