import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { useState } from 'react'
import { DashboardContext } from '../hooks/DashboardContext'
import { customFetch } from '../utils/customFetch'
import { toast } from 'react-toastify'

export const Loader = async () => {
    try {
        const data = await customFetch('/stats/current-user')
        return data
    } catch (err) {
        return redirect('/')
    }
}

interface Data {
    _id: string,
    name: string,
    email: string,
    role: string,
    password: string
    __v: number
}

export default function DashboardLayout({ checkSavedTheme }: { checkSavedTheme: () => boolean }) {
    const data = useLoaderData() as { data: { user: Data } }
    const navigate = useNavigate()
    if (!data) {
        throw new Error('no user')
    }
    const { user } = data.data
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

    const logoutUser = async () => {
        navigate('/')
        await customFetch('/user/logout')
        toast.success('User logged out!')
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
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
