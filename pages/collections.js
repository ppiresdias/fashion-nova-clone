// import Image from "next/image";
import Head from "next/head";

const Collections = () => {
  return (
    <>
        <Head>
            <title>Collections</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
        </Head>
        <section id="#collections" className="collections">
          <div className="container-fluid collections__container">
            <h1 className="collections__header">Spring Collections</h1>
            <div class="row">
              <div class="col-3 collections__search-filter search-filter">
                <ul>
                  <li>Color</li>
                  <li>Size</li>
                  <li>Price</li>
                </ul>
              </div>
              <div class="col-9 collections__gallery gallery">
                <div class="row">
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                </div>
                <div class="row">
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                  <div class="col-3 gallery__column"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Collections;