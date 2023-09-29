"use client"
import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header/page'
import Footer from './components/footer/page'
import { Provider } from 'react-redux'
import store from './redux/store'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <title>Trip Mates</title>
        <link rel="icon" type="image/png" href="/logo.png"/>
      </head>
      <body className="h-full">
        <Provider store={store}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header></Header>
            <div style={{ flex: 1 }}>{children}</div>
            <Footer></Footer>
          </div>
            </Provider>
      </body>
    </html>
  )
}
