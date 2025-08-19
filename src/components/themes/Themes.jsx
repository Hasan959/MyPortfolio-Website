import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";
import './theme.css'

const Themes = () => {
  return (
    <div className="style-switcher">
      <div className="switcher-toggler">
        <FaCog />
      </div>

       <div className="theme-toggler">
        <BsMoon />
       </div>

       <h3 className="switcher-title">Style Switcher</h3>
       <div className="switcher-items grid"> 
         {themes.map((theme,index) => {
          return <ThemeItem key={index} {...theme}/>
         } )}
       </div>

       <div className="switcher-close">
        &times;
        </div> 

    </div>
  )
}

export default Themes