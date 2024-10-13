import React from 'react'
import Button from './primitive/Button'

export default function Navbar() {
  return (
    <nav className='absolute w-full top-0 border-2 border-yellow-400 flex flex-row'>
  
             <p className='flex-start'>logo</p>
           
        <ul className='border-2 flex flex-row  gap-4'>
            <li><a>DashBoard</a></li>
            <li>Accounts</li>
            <li>Operations</li>
        </ul>
      
       
    </nav>
  )
}
