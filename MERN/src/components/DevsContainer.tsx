import Wrapper from "../assets/wrappers/DevsContainer"
import { UseAllDevsContext } from "../hooks/AllDevsContext"
import { Dev } from "./Dev"

const DevsContainer = () => {
    const data = UseAllDevsContext()
    const devs = data?.data.devs
    if (devs?.length === 0) {
        return <Wrapper>
            <h2>no devs to display</h2>
        </Wrapper>
    }
    return <Wrapper>
        <div className="jobs">
            {devs?.map((dev) => {
                return <Dev key={dev._id} {...dev} />
            })}
        </div>
    </Wrapper>
}

export default DevsContainer