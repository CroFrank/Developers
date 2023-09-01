import { toast } from 'react-toastify'
import { customFetch } from '../utils/customFetch'
import { redirect, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/StatsContainer'
import { StatItem } from '../components'
import { FaComputer, FaComputerMouse } from 'react-icons/fa6'

interface adminStats {
    users: number
    devs: number
}

export const Loader = async () => {
    try {
        const response = await customFetch.get('/stats/admin/app-stats')
        return response.data
    } catch (error) {
        toast.error('You are not authorized to view this page')
        return redirect('/dashboard')
    }
}

export function Admin() {
    const data = useLoaderData() as adminStats
    const { users, devs } = data
    return <Wrapper>
        <StatItem title="current users"
            count={users}
            color="#e9b949"
            bcg="#fcefc7"
            icon={<FaComputerMouse />}
        />
        <StatItem
            title="total devs"
            count={devs}
            color="#647acb"
            bcg="#e0e8f9"
            icon={<FaComputer />}
        />
    </Wrapper>
}
