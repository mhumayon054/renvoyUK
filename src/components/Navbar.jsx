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
import splitscreen from "../assets/images/splitscreen.png"
import window from "../assets/images/window.png"
import { CiCirclePlus } from "react-icons/ci";
import { RiFilter3Fill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="navbar-parent">
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
                        <div className="col-md-7 col-sm-12">
  <div className="navbar-items">
    <ul className="d-flex flex-wrap justify-content-between">
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
                                        <input type="text" name="search" id="search" placeholder="Search" />
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
            <div className="menu-nav">
                <div className="section1-menu-nav">
                    <span>Loads</span>
                </div>
                <div className="section2-menu-nav">
                    <div className="minibox-img">
                    <img src={splitscreen} alt="" />
                    <span className="bar">|</span>
                    <img src={window} alt="" />
                    </div>
                    <button><CiCirclePlus style={{ color: '#fff', strokeWidth: '0.5' }} size={15}/>Create Load</button>
                </div>
            </div>
            <div className="nav-3rd">
                <div className="section1-nav3rd">
                    <span>History</span>
                    <span style={{color:"#0A8FEF"}}>Activity</span>
                </div>
                <div className="section2-nav3rd">
                   <div className="filter-text">
                    <span><RiFilter3Fill size={20}/>Filter</span>
                    </div>
                    <div className="ul-li">
                        <ul>
                            <li>Date<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            <li>Custonmer<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            <li>Driver<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            <li>Truck<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            <li>Status<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            <li>Location<CiCirclePlus style={{ color: '#595E6A', strokeWidth: '0.5' }} size={15}/></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;