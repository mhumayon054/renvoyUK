import logo from "../assets/images/logo.png"
import home from "../assets/images/home.svg"
import loads from "../assets/images/loads.svg"
import activity from "../assets/images/activity.svg"
import bars from "../assets/images/bars.svg"
import user from "../assets/images/user-avatar.svg"
import profile from "../assets/images/user.svg"
import rocket from "../assets/images/rocket.svg"
import truck from "../assets/images/truck.svg"
import search from "../assets/images/search.svg"
import CustomDropdown from "./NavbarDropdown"

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
       <div className="container-fluid">
       <div className="row">
                <div className="col-md-3">
                    <div className="navbar-header">
                    <div className="logo-wrapper">
                        <div className="logo">
                            <a href="/">
                            <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="dropdown-wrapper">
                        <CustomDropdown />
                    </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="navbar-items">
                        <ul>
                            <li>
                                <img src={home} alt="icon" />
                                <span>Home</span>
                            </li>
                            <li>
                                <img src={activity} alt="icon" />
                                <span>Activity</span>
                            </li>
                            <li className="active">
                                <img src={loads} alt="icon" />
                                <span>Loads</span>
                            </li>
                            <li>
                                <img src={truck} alt="icon" />
                                <span>Fleet</span>
                            </li>
                            <li>
                                <img src={bars} alt="icon" />
                                <span>Finance</span>
                            </li>
                            <li>
                                <img src={rocket} alt="icon" />
                                <span>Team</span>
                            </li>
                            <li>
                                <img src={profile} alt="icon" />
                                <span>Admin</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="search-profile-wrapper">
                        <div className="search-bar">
                            <div className="icon">
                                <img src={search} alt="icon" />
                            </div>
                            <div className="input">
                                <input type="text" name="search" id="search" placeholder="Search"/>
                            </div>
                        </div>
                        <div className="user-avatar">
                            <img src={user} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
       </div>
        </div>
    )
}

export default Navbar;