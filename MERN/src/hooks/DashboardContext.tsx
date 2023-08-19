import { createContext, useContext } from 'react'

interface DashboardContextProps {
    user: { name: string }
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
