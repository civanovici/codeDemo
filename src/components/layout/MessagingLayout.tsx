'use client'

import { FC, ReactNode, useState } from 'react'

interface MessagingLayoutProps {
  contacts: ReactNode
  threads: ReactNode
  messages: ReactNode
}

const MessagingLayout: FC<MessagingLayoutProps> = ({
  contacts,
  threads,
  messages,
}) => {
  const [mobileView, setMobileView] = useState<'contacts' | 'threads' | 'messages'>('threads')

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Contacts - Hide on mobile unless selected */}
      <div className={`w-64 border-r bg-white ${mobileView !== 'contacts' ? 'hidden lg:block' : 'w-full lg:w-64'}`}>
        {contacts}
      </div>

      {/* Threads - Hide on mobile unless selected */}
      <div className={`w-80 border-r bg-white ${mobileView !== 'threads' ? 'hidden lg:block' : 'w-full lg:w-80'}`}>
        {threads}
      </div>

      {/* Messages - Hide on mobile unless selected */}
      <div className={`flex-1 bg-white ${mobileView !== 'messages' ? 'hidden lg:block' : 'block'}`}>
        {messages}
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex lg:hidden">
        <button
          onClick={() => setMobileView('contacts')}
          className={`flex-1 p-4 text-center ${mobileView === 'contacts' ? 'text-[#4CAF50]' : ''}`}
        >
          Contacts
        </button>
        <button
          onClick={() => setMobileView('threads')}
          className={`flex-1 p-4 text-center ${mobileView === 'threads' ? 'text-[#4CAF50]' : ''}`}
        >
          Threads
        </button>
        <button
          onClick={() => setMobileView('messages')}
          className={`flex-1 p-4 text-center ${mobileView === 'messages' ? 'text-[#4CAF50]' : ''}`}
        >
          Messages
        </button>
      </div>
    </div>
  )
}

export default MessagingLayout 