import React, { useRef } from 'react'
import style from './Loading.module.css'
import icon from '../assets/lbg.png'

export default function Loading() {

    return (
        <div className={`${style.main}`}>
            <div className={`${style.main_card} `}>
                <div className={`${style.icon}`}><img src={icon} alt="" /></div>
                <div className={`${style.load}`}>
                    <h1>
                        <span className={`${style.let1}`}>l</span>
                        <span className={`${style.let2}`}>o</span>
                        <span className={`${style.let3}`}>a</span>
                        <span className={`${style.let4}`}>d</span>
                        <span className={`${style.let4}`}>i</span>
                        <span className={`${style.let6}`}>n</span>
                        <span className={`${style.let7}`}>g</span>
                    </h1>
                </div>
            </div >
        </div >
    )
}
