import Head from "next/head";
import Filter from "../components/collections__Filter";


// COLLECTIONS OR GALLERY PAGE
const Collections = () => {
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  // Product component, loops for now
  const getPhotos = (count=10) => {
    let arr = [];
    let s = "dadfadsf"
    let photos = {0: ["001-top1-HoldOnToThisVibeTieDyeCropTop-Pinkcombo_MER.jpg", "001-top2-07-20-20Studio4_EF_CP_11-51-59_36_T8134_PinkCombo_2982_JK_360x.webp"], 1: ["002-top1-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__7_EH.jpg", "002-top2-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__14_EH_360x.jpg"]};
    for(let i = 0; i < count; ++i) {
      let index = i % 2;
      arr.push(
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 gallery__column" key={i}>
          <div className="gallery__container">
            <div className="gallery__image-container">
            <img className="gallery__image" src={`/img/collections/${photos[index][0]}`} />
              <i className="fa fa-heart-o gallery__icon gallery__icon--heart" aria-hidden="true"></i>
              <i className="fa fa-chevron-right gallery__icon gallery__icon--arrow-right" aria-hidden="true"></i>
            </div>
            <div className="product-info">
                <span className="product-info__discount">30-70% off sidewide! Use code: Spring</span>
                <span className="product-info__title">Hold on to this vibe tie dye Crop Top - Pink/combo</span>
                <span className="product-info__price">$19.99 USD</span>
                <div className="product-info__swatches bg-primary">
                  {Math.random() < 0.5 ? <><div className="swatch swatch--first swatch--pink swatch--active"></div>
                  <div className="swatch swatch--red"></div>
                  <div className="swatch swatch--blue"></div></> : <></>}
                </div>
                <button className="product-info__button bag-button"><span className="bag-button__text">Add to Bag</span><i className="fa fa-chevron-down bag-button__icon" aria-hidden="true"></i></button>
              </div>
              <div className="product-info__top-container">
              {/* <div className="product-info__bottom-container">              </div> */}
            </div>
          </div>
        </div>
      );
    }
    return arr;
  }

  return (
    <>
        <Head>
            <title>Collections</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
        </Head>
        <section id="#collections" className="collections">
          {/* TOP BUTTON */}
          <button onClick={topFunction} title="Back to top" id="topButton" className="top-button"><i className="fa fa-chevron-up top-button__icon" aria-hidden="true"></i></button>
          <div className="container-fluid collections__container">
            <div className="collections__top">
              <h1 className="collections__header">Spring Collections</h1>
              <p className="collections__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti odio eos culpa dignissimos, laborum fuga, maxime enim recusandae, perferendis consectetur nam!</p>
              <p className="collections__read-more">Read more</p>
            </div>
            <div className="row">
              <div className="d-none d-md-block col-md-3">
                <div className="container">
                  <Filter />
                </div>
              </div>
              <div className="col-12 col-md-9 collections__gallery gallery">
              <div className="container">
                <div className="gallery__sorting">
                  <div className="gallery__sorting-found">0 results</div>
                  <div className="gallery__sorting-options">
                    <select id="gallery__dropdown" className="gallery__dropdown" name="sortBy">
                      <option htmlFor="gallery__dropdown" value="ascending">Featured</option>
                      <option htmlFor="gallery__dropdown" value="descending">Best Sellers</option>
                      <option htmlFor="gallery__dropdown" value="descending">Newest Arrivals</option>
                      <option htmlFor="gallery__dropdown" value="descending">Price: How to Low</option>
                      <option htmlFor="gallery__dropdown" value="descending">Price: Low to High</option>
                    </select>
                  </div>
                </div>
                <p className="res">This is text</p>
                <div className="row">
                  {getPhotos()}
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>
    </>
  );
};

export default Collections;
