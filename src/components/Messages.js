const Messages = () => {
    return (
        <li className="dropdown dropdown-list-toggle">
            <a href="src/layouts/Navbar#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep">
                <i className="far fa-envelope"></i>
            </a>
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
    );
}

export default Messages;