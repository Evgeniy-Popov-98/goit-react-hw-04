import clsx from "clsx";
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, pageNumber }) => {
  return (
    <button className={clsx(style.loreMoreBtn)} type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default LoadMoreBtn;
