import React,{ useState } from 'react'
import style from './navigation.module.css'
import icon from '../assets/icon.png'
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);
    const handleToggle = toggled => {
        if (toggled) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    };
    return (
        <div>
            <div className={`${style.nav}`}>
                <div className={`${style.left}`}>
                    <img src={icon} alt="" />
                </div>
                <div className={`${style.text}`}>Future City</div>
                <div className={`${style.right}`}>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">City Services</NavLink></li>
                        <li><button><NavLink to="/contact">Contact</NavLink></button></li>
                    </ul>
                    
                </div>
                <div className={`${style.ham}`}>
                    <Hamburger color='#CDA657 ' onToggle={handleToggle} />
                </div>
            </div>
            {showNav && <div className={`${style.container_show}`}>
                <div className={`${style.item}`}>
                    <div className={`${style.element}`}><NavLink to="/">Home</NavLink></div>
                    <div className={`${style.element}`}><NavLink to="/about">About</NavLink></div>
                    <div className={`${style.element}`}><NavLink to="/services">City Services</NavLink></div>
                    <div className={`${style.element}`}><button><NavLink to="/contact">Contact</NavLink></button></div>
                </div>
            </div>}
        </div>
    )
}

