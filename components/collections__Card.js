import Swatch from "../components/collections__swatch";

const getSwatches = (arr) => {
  return arr.map((item, index) => {
    return <Swatch first={index ? false : true} color={item} key={index} />;
  });
}

const Card = (props) => {
  return (
    <div className="card gallery__container h-100">
      <div className="gallery__image-container gallery__image-container--right card-img-top">
        <div className="gallery__carousel">
          <img className="gallery__image gallery__image--first" src={`/img/collections/${props.photo1}`} />
          <img className="gallery__image gallery__image--second" src={`/img/collections/${props.photo2}`} />
        </div>
        <div className="gallery__icon gallery__icon--heart">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div className="gallery__icon gallery__icon--arrow gallery__icon--arrow--left">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div className="gallery__icon gallery__icon--arrow gallery__icon--arrow--right">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="card-body product-info">
        <div className="product-info__discount">{Math.random < 0.3 ? "10% OFF SIDEWIDE! USE CODE: WINTER30-70% OFF SIDEWIDE!" : "USE CODE: SPRING"}</div>
        <div className="product-info__title">{props.title}</div>
        <div className="product-info__price">$19.99 USD</div>
        <div className="product-info__swatches">{Math.random() < 0.2 ? <></> : getSwatches(["red", "blue", "green"])}</div>
        <button className="product-info__button bag-button"><span className="bag-button__text">Add to Bag</span><i className="fa fa-chevron-down bag-button__icon" aria-hidden="true"></i></button>
      </div>
  </div>
  );
};

export default Card;
