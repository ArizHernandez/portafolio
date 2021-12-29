import React from 'react';
import { SocialMediaLink } from './SocialMediaLink';

export default function Footer() {
  return (
    <footer className='footer__main-container'>
      <div className='footer__content-container'>
        <div className='footer__social-container'>
          <ul className='footer__social-links'>
            <SocialMediaLink
              url='https://www.instagram.com/ariz_hassam/'
              icon='fab fa-instagram fa-2x'
            />

            <SocialMediaLink
              url='https://github.com/ArizHernandez'
              icon='fab fa-github fa-2x'
            />

            <SocialMediaLink
              url='https://www.linkedin.com/in/ariz-hernandez/'
              icon='fab fa-linkedin fa-2x'
            />
          </ul>
        </div>

        <div className='footer__navbar-container'>
          <nav className='footer__navbar-items-container'>
            <ul className='footer__navbar-items'>
              <li>
                <a href='#about' className='footer__navbar-item'>
                  About
                </a>
              </li>
              <li>
                <a href='#projects' className='footer__navbar-item'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#certificates' className='footer__navbar-item'>
                  Certificates
                </a>
              </li>
              <li>
                <a href='#contact' className='footer__navbar-item'>
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='footer__message-container'>
        <p className='footer__message'>
          Made with <span style={{ color: 'red' }}>❤</span> by Ariz Hernández -{' '}
          {new Date().getFullYear()}&copy;
        </p>
        <p>
          <a
            href='https://github.com/ArizHernandez/portafolio'
            target='_blank'
            rel='noreferrer'
            className='footer__message-source'
          >
            Source code
          </a>
        </p>
      </div>
    </footer>
  );
}
