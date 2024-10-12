import "./ModalWithForm.css";
import { useState } from "react";

function ModalWithForm({ handleSubmit, handleCloseModal }) {
  const [formData, setFormData] = useState({});
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("dmemmem", formData);
    handleSubmit(formData);
  }

  function handleClose(e) {
    e.preventDefault();
    handleCloseModal();
  }

  function getInputValues() {
    const data = {};
    this._inputList.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }
  function handleAddChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <div className="modal">
      <div className="modal__content">
        {" "}
        <h2 className="modal__title"> New garment</h2>
        <button onClick={handleClose} type="button" className="modal__close">
          Close
        </button>{" "}
        <form onSubmit={handleFormSubmit} className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name {""}
            <input
              type="text"
              className="modal__input"
              placeholder="Name"
              id="name"
              name="name"
              onChange={handleAddChange}
            ></input>
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image {""}
            <input
              type="text"
              className="modal__input"
              placeholder="ImageUrl"
              id="imageUrl"
              name="link"
              onChange={handleAddChange}
            ></input>
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__input_tye_radio"
            >
              <input
                name="weather"
                id="hot"
                type="radio"
                className="modal__radio-input "
                onChange={handleAddChange}
                value="hot"
              ></input>
              Hot
            </label>
            <legend className="modal__legend"></legend>
            <label
              htmlFor="warm"
              className="modal__label modal__input_tye_radio"
            >
              <input
                id="warm"
                type="radio"
                className="modal__radio-input  "
                onChange={handleAddChange}
                name="weather"
                value="warm"
              ></input>{" "}
              Warm
            </label>
            <legend className="modal__legend"></legend>
            <label
              htmlFor="warm"
              className="modal__label modal__input_tye_radio"
            >
              <input
                id="cold"
                type="radio"
                className="modal__radio-input  "
                onChange={handleAddChange}
                name="weather"
                value="warm"
              ></input>
              Cold
            </label>
          </fieldset>
          <input
            type="submit"
            className="modal__submit"
            value="Add garment"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
