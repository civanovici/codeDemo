'use client'

import { FC, ReactNode } from 'react'

interface ContentLayoutProps {
  children: ReactNode
  header?: ReactNode
  toolbar?: ReactNode
  footer?: ReactNode
}

const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  header,
  toolbar,
  footer
}) => {
  return (
    <div className="flex flex-col min-h-full">
      {header && (
        <div className="border-b bg-white px-6 py-4">
          {header}
        </div>
      )}
      
      {toolbar && (
        <div className="border-b bg-white px-6 py-2 flex items-center gap-4">
          {toolbar}
        </div>
      )}
      
      <div className="flex-1 px-6 py-6">
        {children}
      </div>
      
      {footer && (
        <div className="border-t bg-white px-6 py-4 mt-auto">
          {footer}
        </div>
      )}
    </div>
  )
}

export default ContentLayout 