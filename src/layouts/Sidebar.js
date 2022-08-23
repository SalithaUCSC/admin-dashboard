import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <Link to={"/"}>ADMIN DASHBOARD</Link>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <Link to={"/"}>AD</Link>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">DASHBOARD</li>
                    <li>
                        <Link className="nav-link" to={"/"}>
                            <i className="fas fa-fire"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to={"/contact"}>
                            <i className="fas fa-user-circle"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;