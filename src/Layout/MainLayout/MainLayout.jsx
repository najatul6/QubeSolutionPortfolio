import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;