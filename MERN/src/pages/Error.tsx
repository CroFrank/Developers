import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import errorImg from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

export default function Error() {
    const error = useRouteError()
    console.log(error)
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <Wrapper>
                    <div>
                        <img src={errorImg} alt="error image" />
                        <h3>Page not found</h3>
                        <p>{error.data}</p>
                        <Link to="/dashboard">Back to Homepage</Link>
                    </div>
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    <h1>Something went wrong</h1>
                </Wrapper>
            )
        }
    } else {
        return (
            <Wrapper>
                <h1>Something went wrong whit types</h1>
            </Wrapper>
        )
    }
}
