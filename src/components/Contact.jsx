import React from 'react'
import style from './contact.module.css'
const Contact = () => {
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.card}`}>
          <div className={`${style.card_main}`}>
            <div className={`${style.head}`}>
              Contact Us
            </div>
            <div className={`${style.para_main}`}>
              <div className={`${style.para}`}>
                "We are always avilable for you, for building your future city."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.heading}`}>
        Contact to <span>&nbsp;Future City</span>
      </div>
      <div className={`${style.main2}`}>
          <div className={`${style.cont}`}><input type="text" placeholder='Topic' /></div>
          <div className={`${style.cont}`}><input type="email" name="" id="" placeholder='E-mail' /></div>
          <div className={`${style.cont}`}><textarea name="" id="" placeholder='Message'></textarea></div>
          <div className={`${style.cont}`}><button>Submit</button></div>
      </div>
    </>
  )
}

export default Contact
