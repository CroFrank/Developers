import { toast } from "react-toastify"
import { customFetch } from "../utils/customFetch"
import { useLoaderData } from "react-router-dom"
import { DevsContainer, SearchContainer } from "../components"
import { AllDevsContext, AllDevsContextProps } from "../hooks/AllDevsContext"

export const Loader = async () => {
    try {
        const data = await customFetch('/alldevelopers')
        return data
    } catch (err) {
        toast.error('error')
        return err
    }
}

export default function AllDevs() {
    const data = useLoaderData() as AllDevsContextProps
    return (
        <AllDevsContext.Provider value={data}>
            <SearchContainer />
            <DevsContainer />
        </AllDevsContext.Provider>
    )
}
