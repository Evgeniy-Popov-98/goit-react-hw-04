const ImageCard = ({ dataImages }) => {
  //   console.log(dataImages);
  return (
    <li>
      <div>
        <img src={dataImages.small} alt={dataImages.description} />
      </div>
    </li>
  );
};

export default ImageCard;
