import React from 'react'
import style from './footer.module.css'
import { NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className={`${style.footer}`}>
                <div className={`${style.top}`}>
                    <div className={`${style.top_card}`}>
                        <div className={`${style.card_one}`}><i class="fa fa-instagram"></i><i class="fa fa-facebook"></i><i class="fa fa-linkedin"></i><i class="fa fa-twitter" ></i></div>
                        <div className={`${style.card_one}`}><button><NavLink to="/">Home</NavLink></button><button><NavLink to="/about">About</NavLink></button><button><NavLink to="/services">City Services</NavLink></button><button><NavLink to="/contact">Contact</NavLink></button></div>
                    </div>
                </div>
                <div className={`${style.bottom}`}> &copy; Kaushtubh Singh </div>
            </footer>
        </>
    )
}
