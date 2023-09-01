import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
    DashboardLayout,
    Login,
    Register,
    HomeLayout,
    Landing,
    Error,
    Admin,
    AllDevs,
    Profile,
    Stats,
    AddDev,
    EditDev
} from './pages'
import { RegisterAction } from './pages/Register'
import { LoginAction } from './pages/Login'
import { Loader } from './pages/DashboardLayout'
import { ActionAddDev } from './pages/AddDev'
import { Loader as allDevsLoader } from './pages/AllDevs'
import { Loader as editDevLoader } from './pages/EditDev'
import { Action as editDevAction } from './pages/EditDev'
import { Action as deleteAction } from './pages/DeleteDev'
import { Loader as adminLoader } from './pages/Admin'

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
                        element: <AddDev />,
                        action: ActionAddDev
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                        loader: adminLoader
                    },
                    {
                        path: 'alldevs',
                        element: <AllDevs />,
                        loader: allDevsLoader,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                    {
                        path: 'stats',
                        element: <Stats />,
                    },
                    {
                        path: 'edit-dev/:id',
                        element: <EditDev />,
                        loader: editDevLoader,
                        action: editDevAction
                    },
                    {
                        path: 'deletedev/:id',
                        action: deleteAction
                    }
                ],
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
