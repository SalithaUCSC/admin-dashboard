import UserLogo from "../assets/img/avatar/avatar-1.png";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {dashboardActions} from "../features/DashboardSlice";

const LoginInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clear = (e) => {
        e.preventDefault();
        dispatch(dashboardActions.clear({}))
        navigate("/login")
    }
    return (
        <li className="dropdown">
            <a href="src/layouts/Navbar#" data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                <img alt="image" src={UserLogo} className="rounded-circle mr-1"/>
                <div className="d-sm-none d-lg-inline-block">Hi, Salitha</div></a>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-title">Logged in 5 min ago</div>
                <Link to={"/profile"} className="dropdown-item has-icon">
                    <i className="far fa-user"></i> Profile
                </Link>
                <Link to={"/profile"} className="dropdown-item has-icon">
                    <i className="fas fa-bolt"></i> Activities
                </Link>
                <Link to={"/profile"} className="dropdown-item has-icon">
                    <i className="fas fa-cog"></i> Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button onClick={clear} className="dropdown-item btn btn-outline-danger btn-sm has-icon text-danger">
                    {/*<i className="fas fa-sign-out-alt"></i> */}
                    Logout
                </button>
            </div>
        </li>
    );
}

export default LoginInfo;