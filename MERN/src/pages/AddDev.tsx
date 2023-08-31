import { Form, useNavigation, useOutletContext, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import { FormRow } from "../components"
import { customFetch } from '../utils/customFetch'
import { toast } from 'react-toastify'

interface Data {
    _id: string,
    name: string,
    email: string,
    role: string,
    __v: number
}

export const ActionAddDev = async (incomingData: { request: Request }) => {
    const formData = await incomingData.request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.post('/alldevelopers', data)
        toast.success('Success!', {
            position: "top-center",
            autoClose: 2000
        });
        return redirect('/dashboard/alldevs')
    } catch (error) {
        toast.error('Error')
        return error
    }
}

export default function AddDev() {
    const data = useOutletContext() as { user: Data }
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return (
        <Wrapper>
            <Form method="post" className="form">
                <h4 className="form-title">
                    add dev
                </h4>
                <div className="form-center">
                    <FormRow type="text" name="name" defaultValue={data.user.name} labelText="name" />
                    <FormRow type="number" name="age" labelText="age" />
                    <div className="form-row">
                        <label htmlFor="location" className="form-label">
                            location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-input"
                            placeholder="ex. Zagreb - Croatia"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="skills" className="form-label">
                            skills
                        </label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            className="form-input"
                            placeholder="ex. HTML, CSS, JavaScript"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
                        {isSubmitting ? '...submitting' : 'submit'}
                    </button>
                </div>
            </Form>
        </Wrapper>
    )
}
