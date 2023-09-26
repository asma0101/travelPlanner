import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Login - Travel Planner',
  description: 'Travel Planner - Next Js',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div style={{ flex: 1 }}>{children}</div>
  )
}
