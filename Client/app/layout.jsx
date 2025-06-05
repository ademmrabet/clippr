import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

const MainLayout = ({ children }) => {
  return (
    <html>
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>Clippr | You deserve to stand out</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='description' content='Clippr is a social media agency that helps you stand out in the digital world.' />
            <meta name='keywords' content='social media, agency, digital marketing, branding' />
            <meta name='author' content='Clippr' />
        </head>
        <body className='top-0'>
          <Navbar />
            <main>
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default MainLayout