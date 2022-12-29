import { AppProps } from 'next/app';
import Nav from './Nav';
import Header from './Header';
import Image from 'next/image'
import Footer from './Footer';

import styles from '../styles/Layout.module.css'

export default function Layout({children, props}:{children:any,props:any}) {
  return (
    <>
      <div className={styles.container}>
        <main className="page-width" {...props}>
          <Nav />
          <Header />
          {children}
          <Image 
            width={375} 
            height={375}
            src="/hero_image_5.png"
            alt="hero image" 
          />
          <Footer />
        </main>
      </div>
    </>
  )
}