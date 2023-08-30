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
import { RegisterAction } from './pages/Register'
import { LoginAction } from './pages/Login'
import { Loader } from './pages/DashboardLayout'

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
                action: RegisterAction
            },
            {
                path: 'login',
                element: <Login />,
                action: LoginAction
            },
            {
                path: 'dashboard',
                element: <DashboardLayout checkSavedTheme={() => checkSavedTheme()} />,
                loader: Loader,
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
