import { Link, Form } from "react-router-dom"
import { UseDashboardContext } from "../hooks/DashboardContext"
import { Data } from '../pages/DashboardLayout'

export const Test = ({ dev }: { dev: Data }) => {
    const data = UseDashboardContext()
    const nameUser = data?.user.name
    const role = data?.user.role
    if (nameUser === dev.name || role === 'admin') {
        return <>
            <Link to={`/dashboard/edit-dev/${dev._id}`} className="btn edit-btn">Edit</Link>
            <Form method="post" action={`../deletedev/${dev._id}`}>
                <button type="submit" className="btn delete-btn">
                    delete
                </button>
            </Form></>
    }
}