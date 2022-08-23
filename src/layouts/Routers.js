import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../components/Profile";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/home'}/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    );
}

export default Routers;