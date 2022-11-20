import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeToggle } from '../components'
import { defaultTheme } from "../components/ThemeToggle";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-gray-200'>
            {/**<div className='w-full fixed flex z-50'>
                <ThemeToggle />
            </div>**/}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}