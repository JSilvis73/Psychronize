import React from 'react'
import Button from './primitive/Button'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-blue-400 text-white shadow-md z-50 flex items-center justify-between p-2 '>
      <div>
        <p className=''>logo</p>
      </div>



      <ul className='border-2 flex flex-row  gap-8 justify-center'>
        <li><a>DashBoard</a></li>
        <li>Accounts</li>
        <li>Operations</li>
      </ul>

      <div>
        <Button buttonType='button' onClickAction={() => { alert('Logged in!') }} displayText='Login' />
      </div>


    </nav>
  )
}
