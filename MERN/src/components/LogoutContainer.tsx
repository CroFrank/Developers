import { useState } from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { UseDashboardContext } from '../hooks/DashboardContext'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'

export const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false)
    const data = UseDashboardContext()
    return (
        <Wrapper>
            <button
                className="btn logout-btn"
                onClick={() => setShowLogout(!showLogout)}
            >
                <FaUserCircle />
                {data!.user.name ? data!.user.name : 'Guest'}
                <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button className="dropdown-btn" onClick={data?.logoutUser}>
                    Logout
                </button>
            </div>
        </Wrapper>
    )
}
