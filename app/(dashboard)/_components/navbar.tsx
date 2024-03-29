import { NavbarRoutes } from "@/components/navbar-routes"
import MobileSidebar from "./mobile-sidebar"

const Navbar = () => {
    return (
        <div className=" flex p-4 border-b h-full items-center bg-white shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}

export default Navbar