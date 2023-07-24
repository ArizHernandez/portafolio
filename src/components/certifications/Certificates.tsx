import { CertificateItem } from "./CertificateItem";

export default function Certificates() {
  return (
    <div className="certificates__main-container" id="certificates">
      <h3 className="title__content">Courses</h3>

      <div className="certificates__content-container mt-3">
        <CertificateItem
          title="JavaScript Moderno"
          year="2020"
          url="https://www.udemy.com/certificate/UC-1e43b5e9-93ed-45b8-9a18-cf452f63d5b8/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />

        <CertificateItem
          title="Angular: De cero a experto"
          year="2020"
          url="https://www.udemy.com/certificate/UC-e8783268-b60c-4fff-a60f-c1a4549f6c6d/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />

        <CertificateItem
          title="React - The Complete Guide"
          year="2021"
          url="https://www.udemy.com/certificate/UC-b7db4d65-495a-44b1-b088-5b200f2e88a4/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />

        <CertificateItem
          title="SQL - The Complete Guide"
          year="2021"
          url="https://www.udemy.com/certificate/UC-62e5bbba-75fa-4222-8e39-5bae1c2b50e8/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />

        <CertificateItem
          title="Principios SOLID y Clean Code"
          year="2022"
          url="https://www.udemy.com/certificate/UC-2aed85ec-1c11-43c8-a51e-82fec7d6dd6c/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />

        <CertificateItem
          title="React PRO"
          year="2023"
          url="https://www.udemy.com/certificate/UC-1dfc0765-77e5-495c-916b-aac9b5c3118b/"
          logoUrl="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png"
        />
      </div>
    </div>
  );
}
