import { createContext, useContext } from 'react'

interface User {
    name?: string
    password?: string
    email?: string
    role?: string
    _id?: string
}

interface DashboardContextProps {
    user: User
    toggleSidebar: () => void
    toggleDarkTheme: () => void
    logoutUser: () => void
    showSidebar: boolean
    isDarkTheme: boolean
}

export const DashboardContext = createContext<DashboardContextProps | null>(
    null
)

export const UseDashboardContext = () => {
    return useContext(DashboardContext)
}
