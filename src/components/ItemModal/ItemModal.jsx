import "./ItemModal.css";

function ItemModal({ clothingItems, handleClose, item }) {
  return (
    <div className="modal">
      <div className="modal__content modal__content_type_image">
        {" "}
        <button onClick={handleClose} type="button" className="modal__close">
          Close
        </button>{" "}
        <img className="card__image" src={item.link} alt="" />
        <div className="modal__footer">
          <h2 className="modal__caption">{item.name}</h2>
          <p className="modal__weather">Weather:{item.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
