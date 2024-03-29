import { useEffect, useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { getImages } from "../../services/API";

const ImageGallery = ({ valueInput }) => {
  //   const [query, setQuery] = useState("");
  const [card, setCard] = useState([]);
  //   useEffect(() => {
  async function dataImages() {
    try {
      // setIsLoading(true); - loader
      const data = await getImages("cat");
      setCard(data.results);
    } catch (error) {
      // setIsError(true);
    } finally {
      // setIsLoading(false);
    }
  }
  dataImages();
  //   }, card);

  console.log(card);
  return (
    <ul>
      {card.map((item) => {
        return <ImageCard key={item.id} dataImages={item.urls} />;
      })}
    </ul>
  );
};

export default ImageGallery;
