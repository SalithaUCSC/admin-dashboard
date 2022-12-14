import {Link} from "react-router-dom";
import UserLogo from "../assets/img/avatar/avatar-1.png";
import Search from "../components/Search";

const Navbar = () => {
    return (
        <div>
            <div className="navbar-bg"></div>
            <nav className="navbar navbar-expand-lg main-navbar">
                <Search/>
                <ul className="navbar-nav navbar-right">
                    <li className="dropdown dropdown-list-toggle">
                        <a href="src/layouts/Navbar#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i
                        className="far fa-envelope"></i></a>
                        <div className="dropdown-menu dropdown-list dropdown-menu-right">
                            <div className="dropdown-header">Messages
                                <div className="float-right">
                                    <a href="src/layouts/Navbar#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-message">
                                <a href="src/layouts/Navbar#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src="assets/img/avatar/avatar-1.png"
                                             className="rounded-circle"/>
                                        <div className="is-online"></div>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Kusnaedi</b>
                                        <p>Hello, Bro!</p>
                                        <div className="time">10 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src="assets/img/avatar/avatar-2.png"
                                             className="rounded-circle"/>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Dedik Sugiharto</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        <div className="time">12 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src="assets/img/avatar/avatar-3.png"
                                             className="rounded-circle"/>
                                        <div className="is-online"></div>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Agung Ardiansyah</b>
                                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div className="time">12 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src="assets/img/avatar/avatar-4.png"
                                             className="rounded-circle"/>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Ardian Rahardiansyah</b>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                        <div className="time">16 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src="assets/img/avatar/avatar-5.png"
                                             className="rounded-circle"/>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Alfa Zulkarnain</b>
                                        <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                                        <div className="time">Yesterday</div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="src/layouts/Navbar#">View All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown dropdown-list-toggle"><a href="src/layouts/Navbar#" data-toggle="dropdown"
                                                                     className="nav-link notification-toggle nav-link-lg beep"><i
                        className="far fa-bell"></i></a>
                        <div className="dropdown-menu dropdown-list dropdown-menu-right">
                            <div className="dropdown-header">Notifications
                                <div className="float-right">
                                    <a href="src/layouts/Navbar#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-icons">
                                <a href="src/layouts/Navbar#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-icon bg-primary text-white">
                                        <i className="fas fa-code"></i>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        Template update is available now!
                                        <div className="time text-primary">2 Min Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-icon bg-info text-white">
                                        <i className="far fa-user"></i>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                                        <div className="time">10 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-icon bg-success text-white">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                                        <div className="time">12 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-icon bg-danger text-white">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        Low disk space. Let's clean it!
                                        <div className="time">17 Hours Ago</div>
                                    </div>
                                </a>
                                <a href="src/layouts/Navbar#" className="dropdown-item">
                                    <div className="dropdown-item-icon bg-info text-white">
                                        <i className="fas fa-bell"></i>
                                    </div>
                                    <div className="dropdown-item-desc">
                                        Welcome to Stisla template!
                                        <div className="time">Yesterday</div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="src/layouts/Navbar#">View All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown"><a href="src/layouts/Navbar#" data-toggle="dropdown"
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
                            <Link to={"/profile"} className="dropdown-item has-icon text-danger">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;