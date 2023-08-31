import { createContext, useContext } from 'react'

export interface SingleDevContextProps {
    _id: string
    name: string
    age: number
    location: string
    skills: string
}

export interface AllDevsContextProps {
    data: { devs: SingleDevContextProps[] }
}

export const AllDevsContext = createContext<AllDevsContextProps | null>(null)

export const UseAllDevsContext = () => {
    return useContext(AllDevsContext)
}