import React from "react"
import styled from "styled-components"

const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .title {
    font-size: clamp(30px, 8vw, 60px);
  }

  .email-link {
    display: inline-block;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    margin-top: 50px;
  }
`

const Contact = ({ contact }) => {
  return (
    <ContactWrapper id="contact">
      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently looking for any new opportunities for work, so feel free
        to reach out!
      </p>

      <a className="email-link" href={`mailto:${contact}`}>
        Contact me
      </a>
    </ContactWrapper>
  )
}

export default Contact
