import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "../components/Footer"
import Dropdown from "./Dropdown"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)

      }
    }

    window.addEventListener('resize',hideMenu)

    return () => {
      window.removeEventListener('resize',hideMenu)
    }
  })
  return (
    <>
      <Header toggle={toggle} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
