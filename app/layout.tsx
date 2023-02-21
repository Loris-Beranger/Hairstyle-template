import './globals.css'
import ProvidersWrapper from './ProvidersWrapper'
import ReactQueryWrapper from './ReactQueryWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main>
          <ProvidersWrapper>
            <ReactQueryWrapper>{children}</ReactQueryWrapper>
          </ProvidersWrapper>
        </main>
      </body>
    </html>
  )
}
