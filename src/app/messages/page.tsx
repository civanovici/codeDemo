'use client'

import { FC } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import MessagingLayout from '@/components/layout/MessagingLayout'

const MessagesPage: FC = () => {
  return (
    <DashboardLayout>
      <MessagingLayout
        contacts={
          <div className="p-4">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <div className="space-y-2">
              Contacts list will go here
            </div>
          </div>
        }
        threads={
          <div className="p-4">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <div className="space-y-2">
              Message threads will go here
            </div>
          </div>
        }
        messages={
          <div className="flex flex-col h-full">
            <div className="border-b p-4">
              <h2 className="font-semibold">Chat Title</h2>
            </div>
            <div className="flex-1 p-4">
              Messages will go here
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        }
      />
    </DashboardLayout>
  )
}

export default MessagesPage 