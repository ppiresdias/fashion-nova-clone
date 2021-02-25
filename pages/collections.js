import Head from "next/head";
import Filter from "../components/collections__Filter";
import Card from "../components/collections__Card";

// COLLECTIONS OR GALLERY PAGE
const Collections = () => {
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // const getSwatches = (arr) => {
  //   return arr.map((item, index) => {
  //     return <Swatch first={index ? false : true} color={item} key={index} />;
  //   });
  // }

  // Product component, loops for now
  const getPhotos = (count=10) => {
    let arr = [];
    let photos = {0: ["Hold on to this vibe tie dye Crop Top - Pink/combo", "001-top1-HoldOnToThisVibeTieDyeCropTop-Pinkcombo_MER.jpg", "001-top2-07-20-20Studio4_EF_CP_11-51-59_36_T8134_PinkCombo_2982_JK_360x.webp"], 1: ["Grind Time Beyond", "002-top1-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__7_EH.jpg", "002-top2-11-07-19_Studio_1_DV_KYS_14-11-53_24__BNL1117_Nude__14_EH_360x.jpg"]};
    
    for(let i = 0; i < count; ++i) {
      let index = i % 2;
      let photo = photos[index];
      arr.push(
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 gallery__column" key={i}>
          <Card title={photo[0]} photo1={photo[1]} photo2={photo[2]} />
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
                <div className="gallery__sorting row">
                  <div className="gallery__sorting-found col-6 p-0">100 results</div>
                  <div className="gallery__sorting-options col-6 p-0 bg-warning">
                    <div className="row bg-success">
                      <div className="col-6 bg-danger">
                        <div className="gallery__filter">
                         <span className="gallery__filter-text">FILTER</span>
                          <i className="gallery__filter-icon fa fa-sliders" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-6 bg-primary">
                        <select id="gallery__dropdown" className="gallery__dropdown" name="sortBy">
                          <option htmlFor="gallery__dropdown" value="descending">Featured</option>
                          <option htmlFor="gallery__dropdown" value="descending">Best Sellers</option>
                          <option htmlFor="gallery__dropdown" value="descending">Newest Arrivals</option>
                          <option htmlFor="gallery__dropdown" value="descending">Price: High to Low</option>
                          <option htmlFor="gallery__dropdown" value="ascending">Price: Low to High</option>
                        </select>
                      </div>
                    </div>
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
