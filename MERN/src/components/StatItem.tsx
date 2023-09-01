import Wrapper from '../assets/wrappers/StatItem'

interface StateItemProps {
    count: number
    title: string
    icon: React.ReactNode
    color: string
    bcg: string
}

const StatItem = ({ count, title, icon, color, bcg }: StateItemProps) => {
    return (
        <Wrapper color={color} content={bcg}>
            <header>
                <span className="count">{count}</span>
                <span className="icon">{icon}</span>
            </header>
            <h5 className="title">{title}</h5>
        </Wrapper>
    )
}

export default StatItem