import { useNavigate } from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>mradmin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className='icon' />
                <img src="/app.svg" alt="" className='icon' />
                <img src="/expand.svg" alt="" className='icon' />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Country-Style-For-Men-Accessories-.jpg" alt="" />
                    <span>Omer</span>
                </div>
                <img src="/settings.svg" alt="" className='icon' onClick={() => navigate("/settings")} />
                {/* resme tıklandıgında urle /settings yazacak ki bunun karsılıgıda Settings componenti */}
            </div>
        </div>
    )
}

export default Navbar