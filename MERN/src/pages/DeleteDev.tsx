import { customFetch } from "../utils/customFetch"
import { toast } from "react-toastify"
import { Params, redirect } from "react-router-dom"

export const Action = async (incomingData: { params: Params }) => {
    try {
        await customFetch.delete(`/alldevelopers/${incomingData.params.id}`)
        toast.success('Success!', {
            position: "top-center",
            autoClose: 2000
        });
    } catch (error) {
        toast.error('Error')
    }
    return redirect('/dashboard/alldevs')
}