import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../components/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {useSelector} from "react-redux";

const Routers = () => {
    const loggedIn = useSelector(state => state.login.loggedIn);
    return (
        <Routes>
            <Route path={'/'} element={loggedIn ? <Home/> : <Navigate to={'/login'}/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    );
}

export default Routers;