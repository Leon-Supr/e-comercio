import { Outlet } from "react-router"; // Indica dónde se renderizará la página dentro del layout

function AuthLayout() {
    return (
        <>
            <Outlet/>
        </>
    );
}

export default AuthLayout;
