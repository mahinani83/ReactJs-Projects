import React from 'react'
import Button from '../Buttons/Button';
import styles from './contact.module.css'
import { MdMessage } from "react-icons/md";
import serviceimg from '../assests/serviceimg.png'
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';

export default function Contactform() {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [description,setdescription]=useState("");
  const submithandler=(event)=>{
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    setdescription(event.target[2].value);
    console.log(event.target[0].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />} />
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize='24px' />} />
            </div>
            <Button text="VIA EMAIL FORM" icon={<MdMessage fontSize='24px' />} isOutline={true}/>
            <form className={styles.submitform} onSubmit={submithandler}>
              <div className={styles.formcontrol}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

           </div>
              <div className={styles.formcontrol}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className={styles.areadiv}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="8" />
              </div>
              <div className={styles.submitbutton}>
                <button type='submit'>Submit</button>
              </div>
              <div className={styles.displayresult}>
                <div>name is {name}</div>
                <div>email is {email}</div>
                <div>about him {description}</div>
              </div>
            </form>
        </div>
        <div className={styles.imgsection}>
          <img src={serviceimg} alt="Service" />
        </div>
      </div>
    </section>
  )
}
