import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaHandPointRight } from "react-icons/fa";
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, BsChevronRight, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Gourav Technical</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-links">
            <h3>Links</h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Home</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> About</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Service</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Portfolio</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Contact</span>
            </h3>

          </div>

          {/* 3rs column  */}
          <div className="footer-service">
            <h3>Services</h3>

            <h3>
              <BsChevronRight />
              <span className="font_h3"> Web Designing</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> React Js Developer</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Front-end Developer</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Custom Website Development</span>
            </h3>
            <h3>
              <BsChevronRight />
              <span className="font_h3"> Responsive Design</span>
            </h3>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Have a Questions?</h3>
            <h3><BsGeoAltFill /><span className="font_h3"> Meerut, India</span></h3>
            <h3><BsTelephoneFill /><span className="font_h3"> +91 7906517462</span></h3>
            <h3><BsEnvelopeFill /><span className="font_h3"> gptech015@gmail.com</span></h3>
          </div>
        </div>


        <div className="footer-social">
          <div className="footer-social--icons">
            <h3 className="follow_us"><FaHandPointRight/> Follow Us</h3>
            <div>
              <FaLinkedin className="icons" />
            </div>
            <div>
              <FaInstagram className="icons" />
            </div>
            <div>
              <a
                href="#"
                target="_blank">
                <BsFacebook className="icons" />
              </a>
            </div>
          </div>
        </div>


        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-three-column">
            <p>
              @{new Date().getFullYear()} GouravTechnical. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY TERMS & CONDITIONS</p>
            </div>
            <div className="footer-subscribe">
              {/* <h3>Subscribe</h3> */}
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    .font_h3 {
      font-size: 1.6rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 20px;
     
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .follow_us{
      position: relative;  
      top: 17px;
        }

    .footer-bottom--section {
      padding-top: 5rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  input {
    max-width: 15rem;
    padding: 1.4rem 2.2rem;
    border-radius: 20px;
    outline: none;
   }
   input[type="submit"]{
    max-width: 12rem;
    padding: 1.1rem 1.2rem;
    border-radius: 20px;
    font-size: 1.6rem;
    }
 
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
