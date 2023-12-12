import React from 'react'
import "./globals.css"
import Header from '@/components/Header'
import Provider from './Provider'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <Header/>
            <Tabs/>
            {children}
            </Provider>
        </body>
    </html>
  )
}

export default layout