/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../GlobalComponents/Button";
import ContactBg from "../Image/contactsbg.jpg";

const Form = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c6cn23p",
        "template_gvkds2n",
        e.target,
        "user_cgiSymViwXqDwh6MhjRfH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div css={styles} className="formContainer">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name*" name="name" />
        <input type="text" placeholder="Your Email*" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <input type="submit" value="Send Message" className="btn"></input>
      </form>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  display: flex;
  background: url("${ContactBg}") no-repeat center/cover;

  form {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 14px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
    .btn {
      text-decoration: none;
      display: inline-block;
      border: 2px solid #f7373a;
      color: black;
      font-size: 14px;
      padding: 12px 14px;
      transition: color 500ms ease-in-out;
      &:hover {
        color: #f7373a;
        cursor: pointer;
      }
      &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
            
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
    }
  }
`;

export default Form;
