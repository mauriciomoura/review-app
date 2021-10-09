import '../styles/globals.css'
import '../styles/styles.css'
import Link from 'next/link'
import { Fragment } from "react"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <header>
        <nav>
          <ul className="flex justify-between items-center p-8 bg-blue-100">
            <li>
              <Link href="/">
                <a className="text-blue-500 no-underline">
                  Home
                </a>
              </Link>

              <Link href="/about"> 
              <a className="text-blue-500 no-underline p-8">
                About
              </a>
              </Link>

              <Link href="/blog"> 
                <a className="text-blue-500 no-underline">
                  Blog
                </a>  
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-300 flex justify-center items-center py-4">
        <p>Next.js is so cool!</p>
      </footer>
    </Fragment>
  );
}

export default MyApp
