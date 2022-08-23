import Routers from "./Routers";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {useSelector} from "react-redux";

const Layout = () => {
    const loggedIn = useSelector(state => state.login.loggedIn);
    return (
        <div>
            {
                loggedIn && <Navbar/>
            }
            {
                loggedIn && <Sidebar/>
            }
            <Routers/>
            {
                loggedIn && <Footer/>
            }
        </div>
    );
}

export default Layout;