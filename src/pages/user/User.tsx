import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"
const User = () => {
    return (
        <div className="user">
            <Single key={singleUser.id} {...singleUser} />
        </div>
    )
}

export default User