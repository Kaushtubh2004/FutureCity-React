import React, { useRef, useState } from 'react'
import style from './home.module.css'
import { NavLink } from 'react-router-dom'



export default function Home() {

  return (
    <>
      <div>
        <div className={`${style.main} `}>
          <div className={`${style.card}`}>
            <div className={`${style.item}`}>
              <div className={`${style.p1}`}>Blueprints Of Tomorrow,</div>
              <div className={`${style.p1}`}> Rising Today.</div>
              <div className={`${style.p2}`}>become a part of it to build a buetiful future</div>
              <button className={`${style.b1}`} ><NavLink to="/about">About</NavLink></button><button className={`${style.b2}`}><NavLink to="/services">Services</NavLink></button>
            </div>
          </div>
        </div>
        {/* mai2 */}
        <div className={`${style.main2}`}>
          <div class={`${style.slider}`}>
            <div class={`${style.slides}`}>
              <div class={`${style.quote}`}>"The future city is a canvas for innovation and dreams."</div>
              <div class={`${style.quote}`}>"In the city of tomorrow, technology and nature coexist harmoniously."</div>
              <div class={`${style.quote}`}>"Future cities are built on the foundation of sustainable progress."</div>
              <div class={`${style.quote}`}>"A future city thrives on the power of community and connectivity."</div>
            </div>
          </div>
        </div>
        {/* main3 */}
        <div className={`${style.main3}`}>
          <div className={`${style.intro}`}>
            <div className={`${style.left}`}>About &nbsp;<span> Future City</span></div>
            <div className={`${style.right}`}>
              <button><NavLink to="/about">About</NavLink></button>
            </div>
          </div>
          <div className={`${style.about_i}`}>
            <div className={`${style.con_about}`}>
              <div className={`${style.con1}`}>In the cities of tomorrow, services will
               be seamlessly integrated into daily life, harnessing the 
               power of technology to provide unparalleled convenience and
                efficiency. From smart healthcare to automated 
                transportation, every aspect of urban living will be 
                designed to enhance the quality of life. Future cities will 
                be vibrant, sustainable, and inclusive, ensuring that all
                 residents have access to the services they need to thrive.
                  <br /><br /><button><NavLink to="/services">City Servives</NavLink></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
