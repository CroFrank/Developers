import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'
import { customFetch } from '../utils/customFetch'
import { toast } from 'react-toastify'

export const RegisterAction = async (incomingData: { request: Request }) => {
    const formData = await incomingData.request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.post('/user/register', { ...data, "role": "" })
        toast.success('Success!', {
            position: "top-center",
            autoClose: 2000
        });
        return redirect('/login')
    } catch (error) {
        toast.error('Error')
        return error
    }
}

export default function Register() {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return (
        <Wrapper>
            <Form method='post' className="form">
                <Logo width={false} />
                <h4>Register</h4>
                <FormRow
                    type="text"
                    name="name"
                    labelText="name or nickname"
                />
                <FormRow
                    type="email"
                    name="email"
                    labelText="email"
                />
                <FormRow
                    type="password"
                    name="password"
                    labelText="password"
                />
                <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                    {isSubmitting ? '...submiting' : 'submit'}
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </Form>
        </Wrapper>
    )
}

