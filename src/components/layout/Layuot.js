import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Mobilemenu from "../mobileMenu/MobileMenu";


const Layout = ({ children }) => {
  const [mobileMenuActive, setMobileManu] = useState(false)
  const mobileMenuToggle = () => {
    setMobileManu(previousState => !previousState)
    console.log('mobileMenuToggle')
  }
  return (
    <React.Fragment>
      <Header mobileMenuToggle={mobileMenuToggle}></Header>
      <Mobilemenu mobileMenuActive={mobileMenuActive} mobileMenuToggle={mobileMenuToggle}></Mobilemenu>
      {children}
    </React.Fragment>
  )
}


export default Layout;