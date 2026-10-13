import Nav from "../Component/Navbar/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../Component/Home/Home";
function Router() {
    return (<>
        <Nav />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>)
}

export default Router;