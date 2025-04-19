import { Outlet } from "react-router";
import Footer from "/src/components/shared/Footer/Footer";

const Layouts = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layouts;