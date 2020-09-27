import React from "react"
import Facebook from "../../svg/facebook.svg"
import Instagram from "../../svg/instagram.svg"
import LinkedIn from "../../svg/linkedin.svg"

import Phone from "../../svg/phone.svg"
import Mail from "../../svg/mail.svg"

import { PageTitle } from "../components/PageTitle"

export default function Contact() {
  const props = {
    title: "Hey There... Reach Out!",
    subtitle: "Contact Info",
    body:
      "Feel free to give me a call, shoot me an email, or reach out on social media! I'm available for freelance work at an amazing rate!",
  }

  return (
    <div className="contact-page">
      <PageTitle {...props}>
        <div className="page__project-column">
          <div className="contact-section">
            <div className="contact-section__contact-text">
              <Phone className="contact-section__icon" />
              618.581.3766
            </div>

            <a
              href="mailto:saxal28@gmail.com?subject=Saxal.Me%20|%20Freelance%20/%20Contact%20Request"
              className="no-style"
            >
              <div className="contact-section__contact-text">
                <Mail className="contact-section__icon" />
                saxal28@gmail.com
              </div>
            </a>

            <div className="contact-section__contact-text">
              <a target="_blank" href="https://www.facebook.com/alan.sax">
                <Facebook className="contact-section__icon small" />
              </a>
              <a target="_blank" href="https://www.instagram.com/saxal28">
                <Instagram className="contact-section__icon small" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alan-sax-576a24b3"
              >
                <LinkedIn className="contact-section__icon small" />
              </a>
            </div>
          </div>
        </div>
      </PageTitle>
    </div>
  )
}
