import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import { getImage } from "./services/API";

// API key
// Access Key uRbjthHwB56Dd64vCktCP15eYSWhxayYeNHDzHA5aBQ
// Secret Key EALJpmFdCp_-ozenjLrdgoUXL9Gn9JW2NdPAHaI94TA

function App() {
  const [valueInput, setValueOnpit] = useState("");

  const onSubmit = (event) => {
    setValueOnpit(event);
    console.log(event);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />;
      <ImageGallery valueInput={valueInput} />
    </>
  );
}

export default App;
