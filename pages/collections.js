// import Image from "next/image";
import Head from "next/head";
import Filter from "../components/collections__Filter";
import {useEffect} from "react";


// COLLECTIONS OR GALLERY PAGE
const Collections = () => {

  // TOP BUTTON
    // needs to remove height: 100% in ../styles/_common.scss
  useEffect(() => {
    let topButton = document.getElementById("topButton");
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.classList.add("active");
      } else {
        topButton.classList.remove("active");
      }
    }
    
    window.addEventListener("scroll", scrollFunction);    
    topButton.addEventListener("click", topFunction);
  }, []);
  
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
        <Head>
            <title>Collections</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
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
                <div className="row">

                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 gallery__column">
                    <div className="gallery__container">
                      <div className="gallery__image-container">
                        <img className="gallery__image" src="/img/collections/top1-HoldOnToThisVibeTieDyeCropTop-Pinkcombo_MER.jpg" />
                      </div>
                      <div className="gallery__product-info product-info">
                        <div className="product-info__top-container">
                          <h6>30-70% off sidewide! Use code: Spring</h6>
                          <h5>Hold on to this vibe tie dye Crop Top - Pink/combo</h5>
                          <span><strong>$19.99 USD</strong></span>
                        </div>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-times" aria-hidden="true"></i>
                        <button className="product-info__button">Add to Bag</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 gallery__column">
                    <div className="gallery__container">
                      <div className="gallery__image-container">
                        <img className="gallery__image" src="/img/collections/top1-HoldOnToThisVibeTieDyeCropTop-Pinkcombo_MER.jpg" />
                      </div>
                      <div className="gallery__product-info product-info">
                        <div className="product-info__top-container">
                          <h6>30-70% off sidewide! Use code: Spring</h6>
                          <h5>Hold on to this vibe tie dye Crop Top - Pink/combo</h5>
                          <span><strong>$19.99 USD</strong></span>
                        </div>
                        <button className="product-info__button">Add to Bag</button>
                      </div>
                    </div>
                  </div>



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
