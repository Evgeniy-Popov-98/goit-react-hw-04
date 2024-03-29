import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { getImages } from "../../services/API";

const ImageGallery = ({ valueInput }) => {
  //   const [query, setQuery] = useState("");

  //   useEffect(() => {
  async function dataImages() {
    try {
      // setIsLoading(true); - loader
      const data = await getImages("cat");
      // setProducts(data.products);
      console.log(data);
    } catch (error) {
      // setIsError(true);
    } finally {
      // setIsLoading(false);
    }
  }

  dataImages();
  //   }, [query]);

  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;
