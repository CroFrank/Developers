import { Link, Form } from "react-router-dom"
import { UseDashboardContext } from "../hooks/DashboardContext"

export const Test = ({ name }: { name: string }) => {
    const data = UseDashboardContext()
    const nameUser = data?.user.name
    const _id = data?.user._id
    const role = data?.user.role
    console.log(nameUser)
    console.log(name)
    if (nameUser === name || role === 'admin') {
        return <>
            <Link to={`/dashboard/edit-dev/${_id}`} className="btn edit-btn">Edit</Link>
            <Form method="post" action={`../deletedev/${_id}`}>
                <button type="submit" className="btn delete-btn">
                    delete
                </button>
            </Form></>
    }
}