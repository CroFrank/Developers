import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
    DashboardLayout,
    Login,
    Register,
    HomeLayout,
    Landing,
    Error,
    Admin,
    AllJobs,
    Profile,
    Stats,
    Developer,
} from './pages'

const checkSavedTheme = () => {
    const darkTheme = localStorage.getItem('theme') === 'true'
    document.body.classList.toggle('dark-theme', darkTheme)
    return darkTheme
}

checkSavedTheme()

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout checkSavedTheme={() => checkSavedTheme()} />,
                children: [
                    {
                        index: true,
                        element: <Developer />,
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                    },
                    {
                        path: 'alldevelopers',
                        element: <AllJobs />,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                    {
                        path: 'stats',
                        element: <Stats />,
                    },
                ],
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
