import React from 'react';

export const ProjectCard = ({ title, image, linkSource, linkDemo }) => {
  return (
    <div
      className='project__card-container'
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className='project__card-alert'>Place hover me to view!</p>

      <div className='project__card-content'>
        <h3>{title}</h3>
        <div className='project__card-links'>
          <a
            className='project__card-link'
            rel='noreferrer'
            target='_blank'
            href={linkSource}
          >
            Source
            <svg>
              <rect x='0' y='0' fill='none' />
            </svg>
          </a>
          <a
            className='project__card-link'
            rel='noreferrer'
            target='_blank'
            href={linkDemo}
          >
            Demo
            <svg>
              <rect x='0' y='0' fill='none' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
