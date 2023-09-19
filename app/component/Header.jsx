import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="text-white bg-slate-700 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      
      <span className="ml-3 text-xl text-white">Cafetaria</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/register" className="mr-5 hover:text-gray-900">Registe</Link>
      <Link href="/login" className="mr-5 hover:text-gray-900">Login</Link>
       </nav>
    
  </div>
</header>

    </div>
  )
}

export default Header