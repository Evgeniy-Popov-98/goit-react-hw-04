import clsx from "clsx";
import style from "./ImageCard.module.css";

const ImageCard = ({ dataImages }) => {
  return (
    <li className={clsx(style.galleryItem)}>
      <div>
        <img
          className={clsx(style.galleryImage)}
          src={dataImages.small}
          alt={dataImages.description}
        />
      </div>
    </li>
  );
};

export default ImageCard;
