type Props = {
  title: string;
  year: string;
  url: string;
  logoUrl?: string;
};

export const CertificateItem = ({ title, year, url, logoUrl }: Props) => {
  return (
    <div className="certification__item-container">
      <i className="fas fa-rocket fa-2x"></i>

      <div className="certification__content">
        <h3 className="certification__title">{title}</h3>
        <small className="certification__year">{year}</small>
        <p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="certification__link"
          >
            Look
          </a>
        </p>
        {logoUrl && (
          <div className="certification__logo">
            <img src={logoUrl}></img>
          </div>
        )}
      </div>
    </div>
  );
};
