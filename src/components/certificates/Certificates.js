import React, { useEffect } from 'react';
import WOW from 'wowjs';

import { CertificateItem } from './CertificateItem';

export default function Certificates() {
  useEffect(() => {
    new WOW.WOW().init();
  }, [])
  

  return (
    <div className="certificates__main-container wow fadeIn" id="certificates">
      <h3 className="title__content">Courses</h3>

      <div className="certificates__content-container mt-3">
        
        <CertificateItem 
          title="Programación Basica"
          year="2018"
          url="https://platzi.com/p/ArizHer/curso/1050-course/diploma/detalle/"
        />
        
        <CertificateItem 
          title="Angular: De cero a experto"
          year="2020"
          url="https://www.udemy.com/certificate/UC-e8783268-b60c-4fff-a60f-c1a4549f6c6d/"
        />
        
        <CertificateItem 
          title="JavaScript Moderno"
          year="2020"
          url="https://www.udemy.com/certificate/UC-1e43b5e9-93ed-45b8-9a18-cf452f63d5b8/"
        />

      </div>
    </div>
  )
}
