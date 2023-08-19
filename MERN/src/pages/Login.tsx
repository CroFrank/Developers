import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

export default function Register() {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Login</h4>
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="Erik@gmail.com"
                    labelText="email"
                />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="modio"
                    labelText="password"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <button type="button" className="btn btn-block">
                    Explore the app
                </button>
                <p>
                    New user?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    )
}
