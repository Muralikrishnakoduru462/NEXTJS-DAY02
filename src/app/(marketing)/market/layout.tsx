export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          
          
          {children}
          
          <footer style={{backgroundColor:"lightgoldenrodyellow",padding:"1rem"}}>
  <p>Footer</p>
          </footer>
          </body>
      </html>
    )
  }
  