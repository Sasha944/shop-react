import React from "react";
import "./Statick.css";

const ContactUs = () => (
    <>
        <form action="">
        <div className="contact-us">
            <div className="fields">
                <div className="field">
                    <label htmlFor="email" className="label">Будь ласка напишіть своє ім'я :</label>
                    <input type="text" className="input-fields" id="email"/>
                </div>
                <div className="field">
                    <label htmlFor="message" className="label">Напишіть текст повідомлення :</label>
                    <textarea id="message"  className="input-fields"/>
                </div>
            </div>
            <div className="actions">
                <button>
                    Contact Us
                </button>
            </div>
        </div>
        </form>
    </>
);
export default ContactUs;