import Wrapper from '../assets/wrappers/SmallSidebar'
import { LuXOctagon } from 'react-icons/lu'
import Logo from './Logo'
import { UseDashboardContext } from '../hooks/DashboardContext'
import { NavLinks } from './NavLinks'

export default function SmallSidebar() {
    const data = UseDashboardContext()

    return (
        <Wrapper>
            <div
                className={
                    data?.showSidebar
                        ? 'show-sidebar sidebar-container'
                        : 'sidebar-container'
                }
            >
                <div className="content">
                    <button className="close-btn" onClick={data?.toggleSidebar}>
                        <LuXOctagon />
                    </button>
                    <header>
                        <Logo width={false} />
                    </header>
                    <NavLinks isBigsidebar={false} />
                </div>
            </div>
        </Wrapper>
    )
}
