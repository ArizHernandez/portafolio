import React from 'react'

export const SocialMediaLink = ({
  url,
  icon
}) => {
  return (
    <li>
      <a 
        target="_blank" 
        rel="noreferrer" 
        href={url}
        className="footer__social-link"
      >
        <i className={icon}></i>
      </a>
    </li>
  )
}
