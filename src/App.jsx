import { useEffect, useState } from "react";
import "./App.css";

import { getImages } from "./services/API";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [cardArr, setCardArr] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [valueInput, setValueOnpit] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoreMore, setShowLoreMore] = useState(false);

  useEffect(() => {
    async function dataImages() {
      try {
        setError(false);
        setLoader(true);
        const data = await getImages(valueInput, pageNumber);
        if (pageNumber > 1) {
          let newArrData = [...cardArr, ...data];
          setCardArr(newArrData);
        } else {
          setCardArr(data);
        }
      } catch (error) {
        setShowLoreMore(false);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    dataImages();
  }, [valueInput, pageNumber]);

  const onSubmit = (event) => {
    setPageNumber(1);
    setCardArr([]);
    setValueOnpit(event);
    setShowLoreMore(true);
  };

  const onClick = (newpage) => {
    setPageNumber(newpage);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error ? <ErrorMessage /> : <ImageGallery cardImages={cardArr} />}
      {showLoreMore && (
        <LoadMoreBtn onClick={onClick} pageNumber={pageNumber} />
      )}
    </>
  );
}

export default App;
