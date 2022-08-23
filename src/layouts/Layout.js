import Routers from "./Routers";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Routers/>
            <Footer/>
        </div>
    );
}

export default Layout;