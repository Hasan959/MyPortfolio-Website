import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";
import './theme.css'
import { useState } from "react";

const Themes = () => {

  const[showSwitcher,setShowSwitcher]=useState(false)
  return (
    <div className={`${showSwitcher ? 'show-switcher' : ''} style-switcher`}>
      <div className="switcher-toggler" onClick={() =>setShowSwitcher(!showSwitcher)}>
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
  );
};

export default Themes