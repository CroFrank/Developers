import { Logo } from '.'
import Wrapper from '../assets/wrappers/BigSidebar'
import { UseDashboardContext } from '../hooks/DashboardContext'
import { NavLinks } from './NavLinks'

export default function BigSidebar() {
    const data = UseDashboardContext()
    return (
        <Wrapper>
            <div
                className={
                    !data?.showSidebar
                        ? 'sidebar-container show-sidebar'
                        : 'sidebar-container'
                }
            >
                <div className="content">
                    <header>
                        <Logo width />
                    </header>
                    <NavLinks isBigsidebar />
                </div>
            </div>
        </Wrapper>
    )
}
