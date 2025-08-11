import { Outlet } from "react-router"
import Navbar from "./navbar/Navbar"
import Themes from "./themes/Themes"

const AppLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        {/* <Themes/> */}
    </div>
  )
}

export default AppLayout