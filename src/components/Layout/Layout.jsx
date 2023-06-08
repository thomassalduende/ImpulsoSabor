import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../Footer/Footer'


export const Layout = ({children}) => {
  return (
    <>
        <NavBar/>
            <div className='min-h-[100vh]'>
                {children}
            </div>
        <Footer/>
    </>
  )
}
