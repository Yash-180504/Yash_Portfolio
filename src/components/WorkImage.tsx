import { MdArrowOutward } from "react-icons/md";

interface Props {
  preview?: string | null;
  image?: string | null;
  alt?: string;
  link?: string;
}

const WorkImage = ({ preview, image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <div className="work-iframe-wrap">
        {preview ? (
          <iframe
            src={preview}
            title={alt}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            scrolling="no"
            tabIndex={-1}
          />
        ) : (
          <img src={image ?? ""} alt={alt} />
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
            data-cursor="disable"
          >
            <MdArrowOutward />
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
