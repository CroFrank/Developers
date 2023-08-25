import Wrapper from '../assets/wrappers/LandingPage.ts'
import main from '../assets/images/main2.svg'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.tsx'

export default function Landing() {
    return (
        <Wrapper>
            <nav>
                <Logo width={false} />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Connect with <span>Developers</span>
                    </h1>
                    <p>
                        Developers with all kind of developing skills are
                        awaiting to connect with you. Show them what are your
                        skills and prove that only skys are the limit.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Login / Demo user
                    </Link>
                </div>
                <img
                    src={main}
                    alt="connect with developers"
                    className="img main-img"
                />
            </div>
        </Wrapper>
    )
}
