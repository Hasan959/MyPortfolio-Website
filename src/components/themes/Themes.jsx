import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";
import './theme.css'
import { useEffect, useState } from "react";

const Themes = () => {

  const[showSwitcher,setShowSwitcher]=useState(false);
   const[color,setColor]=useState('2');

   const changeColor = (color) => {
    setColor(color);
   }

   useEffect(()=> {
    document.documentElement.style.setProperty('--hue',color);
    localStorage.setItem('color',color)
   }, [color]);
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
          return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
         } )}
       </div>

       <div className="switcher-close" onClick={() =>setShowSwitcher(!showSwitcher)}>
        &times;
        </div> 

    </div>
  );
};

export default Themes