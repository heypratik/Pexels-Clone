import React, { useEffect, useState } from 'react'
import './Nav.css'




function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () =>  {
         if (window.scrollY > 100) {
            handleShow(true)
         } else handleShow(false)
      })
    
      return () => {
        window.removeEventListener('scroll')
      }
    }, [])
    

  return (
    <div className={`nav ${show && 'nav__white'}`}>
        <a href='/'><img className='nav__logo' src='https://images.pexels.com/lib/api/pexels.png' /></a>
    <div className='nav__links'>
    <strong><a href='https://www.pexels.com/license/'>License</a></strong>
    <strong><a href='https://www.pexels.com/join-contributor/'>Upload</a></strong>
    <strong><a href='https://www.pexels.com/onboarding/'>Join</a></strong>
        </div>
    </div>
  )
}

export default Nav