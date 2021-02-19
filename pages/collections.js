// import Image from "next/image";
import Head from "next/head";
import Filter from "../components/collections__Filter";

// COLLECTIONS PAGE
const Collections = () => {
  return (
    <>
        <Head>
            <title>Collections</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
        </Head>
        <section id="#collections" className="collections">
          <div className="container-fluid collections__container">
            <div className="collections__top">
              <h1 className="collections__header">Spring Collections</h1>
              <p className="collections__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti odio eos culpa dignissimos, laborum fuga, maxime enim recusandae, perferendis consectetur nam!</p>
              <p className="collections__read-more">Read more</p>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="container">
                  <Filter />
                </div>
              </div>
              <div className="col-9 collections__gallery gallery">
              <div className="container">
                <div className="gallery-sorter">
                  <div className="gallery-sorter__found">0 results found</div>
                  <div className="gallery-sorter__options-area">
                    <select className="gallery__dropdown" id="gallery__dropdown" name="sortBy">
                      <option htmlFor="gallery__dropdown" value="ascending">Featured</option>
                      <option htmlFor="gallery__dropdown" value="descending">Best Sellers</option>
                      <option htmlFor="gallery__dropdown" value="descending">Newest Arrivals</option>
                      <option htmlFor="gallery__dropdown" value="descending">Price: How to Low</option>
                      <option htmlFor="gallery__dropdown" value="descending">Price: Low to High</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
                </div>
                <div className="row">
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
                  <div className="col-3 gallery__column"></div>
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
