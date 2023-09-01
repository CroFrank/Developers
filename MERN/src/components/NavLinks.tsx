import { links } from '../utils/links'
import { NavLink } from 'react-router-dom'
import { UseDashboardContext } from '../hooks/DashboardContext'

export const NavLinks = ({ isBigsidebar }: { isBigsidebar: boolean }) => {
    const data = UseDashboardContext()
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, icon } = link
                const role = data?.user.role
                if (path === 'admin' && role === 'user') return
                return (
                    <NavLink
                        to={path}
                        key={text}
                        className="nav-link"
                        onClick={isBigsidebar ? undefined : data?.toggleSidebar}
                    >
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}
