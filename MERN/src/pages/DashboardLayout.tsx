import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { useState } from 'react'
import { DashboardContext } from '../hooks/DashboardContext'

export default function DashboardLayout({ checkSavedTheme }: { checkSavedTheme: () => boolean }) {


    const user = { name: 'Fran' }
    const [showSidebar, setShowSidebar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(checkSavedTheme)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        const theme = document.body.classList.toggle('dark-theme', !isDarkTheme)
        localStorage.setItem('theme', theme.toString())
    }

    const logoutUser = () => {
        console.log('logiut')
    }

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleSidebar,
                toggleDarkTheme,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
