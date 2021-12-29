import React from 'react';

import { CertificateItem } from './CertificateItem';

export default function Certificates() {
  return (
    <div className='certificates__main-container' id='certificates'>
      <h3 className='title__content'>Courses</h3>

      <div className='certificates__content-container mt-3'>
        <CertificateItem
          title='Programación Basica'
          year='2018'
          url='https://platzi.com/p/ArizHer/curso/1050-course/diploma/detalle/'
        />

        <CertificateItem
          title='Angular: De cero a experto'
          year='2020'
          url='https://www.udemy.com/certificate/UC-e8783268-b60c-4fff-a60f-c1a4549f6c6d/'
        />

        <CertificateItem
          title='JavaScript Moderno'
          year='2020'
          url='https://www.udemy.com/certificate/UC-1e43b5e9-93ed-45b8-9a18-cf452f63d5b8/'
        />

        <CertificateItem
          title='React: De cero a experto'
          year='2021'
          url='https://www.udemy.com/certificate/UC-90c95c55-046f-47f3-969c-22088af52724/'
        />

        <CertificateItem
          title='React - The Complete Guide'
          year='2021'
          url='https://www.udemy.com/certificate/UC-b7db4d65-495a-44b1-b088-5b200f2e88a4/'
        />

        <CertificateItem
          title="SQL - The Complete Guide"
          year='2021'
          url='https://www.udemy.com/certificate/UC-62e5bbba-75fa-4222-8e39-5bae1c2b50e8/'
        />
      </div>
    </div>
  );
}
