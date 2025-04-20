import { Outlet } from "react-router";
import Footer from "/src/components/shared/Footer/Footer";
import NavBar from "/src/components/shared/NavBar/NavBar";

const Layouts = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layouts;