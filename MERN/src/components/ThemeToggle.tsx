import Wrapper from '../assets/wrappers/ThemeToggle'
import { MdDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { UseDashboardContext } from '../hooks/DashboardContext'

export const ThemeToggle = () => {
    const data = UseDashboardContext()
    return (
        <Wrapper onClick={data?.toggleDarkTheme}>
            {data?.isDarkTheme
                ? <MdOutlineLightMode className="toggle-icon" />
                : <MdDarkMode className="toggle-icon" />}
        </Wrapper>
    )
}
