import Notifications from "../components/Notifications";
import Messages from "../components/Messages";
import LoginInfo from "../components/LoginInfo";

const Navbar = () => {
    return (
        <div>
            <div className="navbar-bg"></div>
            <nav className="navbar navbar-expand-lg main-navbar">
                <a className="form-inline mr-auto"></a>
                <ul className="navbar-nav navbar-right">
                    <Messages/>
                    <Notifications/>
                    <LoginInfo/>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;