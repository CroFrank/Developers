//import { Link, Form } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dev"
import { SingleDevContextProps } from "../hooks/AllDevsContext"
import { Test } from "./Test"


export const Dev = (dev: SingleDevContextProps) => {
    const { skills, name, age, location } = dev
    return <Wrapper>
        <header>
            <div className="main-icon">{name[0]}</div>
            <div className="info">
                <h5>{name}</h5>
                <p>{age} years old</p>
                <p>{location}</p>
            </div>
        </header>
        <div className="content">
            <div className="content-center">
                <h5>Skills:</h5>
                <p>{skills}</p>
            </div>
            <footer className="actions">

                <Test dev={dev} />

            </footer>
        </div>

    </Wrapper>
}