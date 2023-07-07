type Props = {
  url: string;
  icon: string;
};

export const SocialMediaLink = ({ url, icon }: Props) => {
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
  );
};
