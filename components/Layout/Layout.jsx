import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({title, children}) => {
  return (
    <>
        <Head>
            <title>{title ? title + '-SkatingMonk': `Skating Monk Demo: Build by Capcons`}</title>
            <meta name="description" content="ndia's biggest online store for Footwear, Fashion (Clothes/Shoes), Accessories, at the lowest prices in India. Payment options - COD, Credit card, Paytm" />
            <link rel='icon' href="/favicon.ico" />
        </Head>
        <div className='flex flex-col justify-between min-h-screen'>
            <header>
                <nav className='flex items-center justify-between h-12 px-8 shadow-md'>
                    <Link href="/">
                        <a className='text-lg font-bold'>Skating Monk</a>
                    </Link>
                    <div className='space-x-5'>
                        <Link href="/cart">Cart</Link>
                        <Link href="/Login">Login</Link>
                    </div>
                </nav>
            </header>
            <main className='container px-4 m-auto mt-4'>
                {children}
            </main>
            <footer className='flex items-center justify-center h-10 shadow-inner'>
                <p>Copyright @ 2022 Askatingmonk</p>
            </footer>
        </div>
    </>
  )
}

export default Layout