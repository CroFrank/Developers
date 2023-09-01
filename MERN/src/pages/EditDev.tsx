import Wrapper from "../assets/wrappers/DashboardFormPage"
import { Form, Params, redirect, useLoaderData, useNavigation } from "react-router-dom"
import { FormRow } from "../components"
import { customFetch } from '../utils/customFetch'
import { toast } from "react-toastify"

export const Loader = async ({ params }: { params: Params }) => {
    try {
        const data = await customFetch(`/alldevelopers/${params.id}`)
        return data
    } catch (err) {
        toast.error('error')
        return redirect('/dashboard/alldevs')
    }
}

export const Action = async (incomingData: { request: Request, params: Params }) => {
    const formData = await incomingData.request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.patch(`/alldevelopers/${incomingData.params.id}`, data)
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

interface DevData {
    data: {
        name: string;
        age: string;
        location: string;
        skills: string;
    }
}

export default function EditDev() {
    const dev = useLoaderData() as DevData
    const { name, age, location, skills } = dev.data
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return (
        <Wrapper>
            <Form method="post" className="form">
                <h4 className="form-title">
                    Edit dev
                </h4>
                <div className="form-center">
                    <FormRow type="text" name="name" defaultValue={name} labelText="name" />
                    <FormRow type="number" name="age" defaultValue={age} labelText="age" />
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
                            defaultValue={location}
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
                            defaultValue={skills}
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
