import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Container from '@mui/material/Container'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Container maxWidth="sm">{children}</Container>
            <Footer />
        </>
    )
}
