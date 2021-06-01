import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container } from 'react-bootstrap'
import Header from '../Header'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header/>
                {props.children}
    </>
   )

 }

export default Layout ;