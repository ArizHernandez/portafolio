type Props = {
  title: string;
  image: string;
  linkSource: string;
  linkDemo?: string;
};

export const ProjectCard = ({ title, image, linkSource, linkDemo }: Props) => {
  return (
    <div
      className="project__card-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="project__card-alert">Place hover me to view!</p>

      <div className="project__card-content">
        <h3>{title.toUpperCase()}</h3>
        <div className="project__card-links">
          {linkSource ? (
            <a
              className="project__card-link"
              rel="noreferrer"
              target="_blank"
              href={linkSource}
            >
              Source
              <svg>
                <rect x="0" y="0" fill="none" />
              </svg>
            </a>
          ) : null}
          {linkDemo ? (
            <a
              className="project__card-link"
              rel="noreferrer"
              target="_blank"
              href={linkDemo}
            >
              Demo
              <svg>
                <rect x="0" y="0" fill="none" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
