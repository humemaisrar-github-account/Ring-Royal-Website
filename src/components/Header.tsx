 
import { GiDiamondRing } from "react-icons/gi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link"
import React from 'react'
 

const Header = () => {
   
  return (
     <header className="header">
       
        <h1 className="log" data-aos="zoom-in-right"><GiDiamondRing style={{fontSize:"25px"}}/> Ring Royal</h1>
        <nav className="nav"data-aos="zoom-in-left">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ring">Rings</Link>
            <Link href="/contact">Contact us</Link>
            <PiShoppingCartSimpleFill  style={{fontSize: "25px", color: "rgb(175, 48, 109)" }}/>
         </nav>
 
     </header>
  )
}

export default Header 