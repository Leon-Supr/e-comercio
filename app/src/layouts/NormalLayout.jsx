import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

function NormalLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default NormalLayout;
