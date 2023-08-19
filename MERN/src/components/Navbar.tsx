import { Logo } from '.'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft } from 'react-icons/fa'
import { UseDashboardContext } from '../hooks/DashboardContext'
import { LogoutContainer } from './LogoutContainer'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
    const data = UseDashboardContext()

    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={data?.toggleSidebar}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo width={false} />
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <div className="btn-container">
                    <ThemeToggle />
                    <LogoutContainer />
                </div>
            </div>
        </Wrapper>
    )
}
