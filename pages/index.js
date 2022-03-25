import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <AppLayout>
        <h1>
          Welcome to <a href="https://nextjs.org">Mawter</a>
        </h1>
        <nav>
          <Link href='/timeline'>
            <a>
              Timeline
            </a>
          </Link>
        </nav>
      </AppLayout>
      
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 48px;
        }
        
        nav {
          font-size: 24px;
          text-align: center;
        }

        a {
          color: #09f;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}
