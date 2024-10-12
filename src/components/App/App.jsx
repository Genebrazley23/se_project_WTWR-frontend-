import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/MainTemp.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { defaultClothingItems } from "../../utils/constants";
import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [isNewClothesOpen, setIsNewClothesOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  function showNewClothesForm() {
    setIsNewClothesOpen(true);
  }

  const handleCardButton = (item) => {
    setIsNewClothesOpen("preview");
    setClothingItems(item);
  };

  function handleCloseGarment() {
    setIsNewClothesOpen(false);
  }

  function handleSubmitGarment(garment) {
    const clothingId = clothingItems.map((c) => c._id);
    const maxId = Math.max(...clothingId);
    garment._id = maxId + 1;
    console.log("md2oewnodn2ew", garment);
    setIsNewClothesOpen(false);
    setClothingItems((prev) => [...prev, garment]);
  }
  return (
    <div className="page">
      <div className="page__content">
        {" "}
        <Header handleAddClothesBtnClick={showNewClothesForm} />
        <Main weatherData={weatherData} clothingItems={clothingItems} />
      </div>
      {isNewClothesOpen && (
        <ModalWithForm
          handleSubmit={handleSubmitGarment}
          handleCloseModal={handleCloseGarment}
        />
      )}
      <ItemModal clothingItems={clothingItems} card={selectedCard} />
    </div>
  );
}

export default App;
