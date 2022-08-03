import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Store } from '../../utils/Store'

const Layout = ({title, children}) => {
    const {state, dispatch} = useContext(Store);
    const {cart} = state;
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
                        <Link href="/cart">
                        <a>Cart
                        {cart.cartItems.length > 0 && (
                            <span className='px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full'>
                                {cart.cartItems.reduce((a,c)=> a + c.quantity, 0 )}
                            </span>
                        )}
                        </a>
                        </Link>
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