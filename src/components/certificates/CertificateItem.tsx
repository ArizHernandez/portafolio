type Props = {
  title: string;
  year: string;
  url: string;
};

export const CertificateItem = ({ title, year, url }: Props) => {
  return (
    <div className="certificate__item-container">
      <i className="fas fa-rocket fa-2x"></i>

      <div className="certificate__content">
        <h3 className="certificate__title">{title}</h3>
        <small className="certificate__year">{year}</small>
        <p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="certificate__link"
          >
            Look
          </a>
        </p>
      </div>
    </div>
  );
};
