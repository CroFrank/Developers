import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

export default function Register() {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow
                    type="text"
                    name="name"
                    defaultValue="Erik"
                    labelText="name"
                />
                <FormRow
                    type="text"
                    name="lastName"
                    defaultValue="Ninić"
                    labelText="last name"
                />
                <FormRow
                    type="text"
                    name="location"
                    defaultValue="Lastovo"
                    labelText="location"
                />
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
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    )
}
