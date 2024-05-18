import React from 'react'
import style from './about.module.css'
import img1 from '../assets/i1.webp'

export default function About() {
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.card}`}>
          <div className={`${style.card_main}`}>
            <div className={`${style.head}`}>
              Welcome to Future City
            </div>
            <div className={`${style.para_main}`}>
              <div className={`${style.para}`}>"Future City is a visionary metropolis designed to provide a sustainable,
                technologically advanced, and harmonious living environment for its residents. Explore the features that
                make Future City a beacon of innovation and progress."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.main2}`}>
        <div className={`${style.left}`}>
          <div className={`${style.left_center}`}>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={`${style.right}`}>
          <div className={`${style.right_center}`}>
            <div className={`${style.head1}`}>
              Vision & Mission
            </div>
            <div className={`${style.para_main}`}>
              <div className={`${style.para}`}>To be the leading example of a sustainable and smart urban environment, where technology and nature coexist in harmony. <br /><br />
                To provide a high quality of life through innovative solutions, green initiatives, and community-driven projects that inspire other cities around the world.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.main3}`}>
        <div className={`${style.top}`}>
          Key Features
        </div>
        <div className={`${style.bottom_main}`}>
          <div className={`${style.bottom}`}>
            <div className={`${style.feature}`}>
              <h3>Green Spaces</h3>
              <p>Our city is interwoven with lush parks and green rooftops, promoting a healthy and vibrant lifestyle.
              </p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Smart Infrastructure</h3>
              <p>Integrated smart technologies manage everything from traffic to energy consumption, ensuring
                efficiency and sustainability.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Renewable Energy</h3>
              <p>Powered entirely by renewable energy sources, Future City is committed to reducing its carbon
                footprint.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Community Living</h3>
              <p>Designed to foster community engagement, our city offers numerous public spaces, cultural centers,
                and collaborative workspaces.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Advanced Healthcare</h3>
              <p>Equipped with state-of-the-art medical facilities and telehealth services, Future City prioritizes
                the well-being of its residents.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Efficient Public Transport</h3>
              <p>Our extensive public transport network includes autonomous electric buses and high-speed trains,
                making commuting hassle-free and eco-friendly.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Innovative Education</h3>
              <p>Future City boasts a range of educational institutions that emphasize technology, creativity, and
                lifelong learning.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Innovative Education</h3>
              <p>Future City boasts a range of educational institutions that emphasize technology, creativity, and
                lifelong learning.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Innovative Education</h3>
              <p>Future City boasts a range of educational institutions that emphasize technology, creativity, and
                lifelong learning.</p>
            </div>
            <div className={`${style.feature}`}>
              <h3>Innovative Education</h3>
              <p>Future City boasts a range of educational institutions that emphasize technology, creativity, and
                lifelong learning.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
