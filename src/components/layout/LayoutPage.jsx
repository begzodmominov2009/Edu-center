import React, { Fragment } from 'react'
import SiderbarPage from '../sidebar/SiderbarPage'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const LayoutPage = () => {
    return (
        <Fragment>
            <SiderbarPage />
            <Header/>
            <main className='pl-70 pt-25 px-5'>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default LayoutPage
