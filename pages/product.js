import Image from "next/image";
import Head from "next/head";

const Product = () => {
  return (
    <div className="product-wrapper">
      <Head>
        <title>[product name]</title>
      </Head>

      <div className="product container">
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img id="img01" />
        </div>

        <div className="product__row row ">
          <div className="col-sm-12 col-md-6 product__left-column">
            <div className="main-img">
              <img src="/img/jeans4.jpg" alt="jeans" id="myImg" />
            </div>
            <div className="grid-img">
              <img src="/img/jeans1.jpg" alt="jeans" id="myImg2" />
              <img src="/img/jeans2.jpg" alt="jeans" id="myImg3" />
              <img src="/img/jeans3.jpg" alt="jeans" id="myImg4" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 product__right-column">
            <h1 className="title">The Slim Fit Jean</h1>
            <h1 className="price">$78</h1>
            <div className="review">
              <span>
                <i className="star"></i>
                <i className="star"></i>
                <i className="star"></i>
                <i className="star"></i>
              </span>
              <span className="number">4.69</span>
              <span>See 1814 reviews</span>
            </div>
            <div className="description">
              <span>description</span>
              <p>
                Easy and slim—but not skinny. The Slim Fit Jean is made of
                premium 11 oz Japanese denim that feels substantial, but has a
                touch of stretch for comfort. Need we say more?
              </p>
            </div>
            <hr />
            <div className="pant-waist">
              <p>Pant Waist</p>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
              <span>32</span>
              <span>34</span>
              <span>35</span>
              <span>37</span>
            </div>
            <div className="pant-fit">
              <p>Pant Fit</p>
              <span>Skinny</span>
              <span>Tailored</span>
              <span>Slim</span>
              <span>Straight</span>
            </div>
            <div className="color">
              <p>color</p>
              <span className="dot"></span>
            </div>
            <div className="quantity">
              <p>quantity</p>
              <div className="square">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <hr />
            <div className="buttons">
              <button>Add to cart</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="outfit-wrapper">
        <div className="c-outfit container">
          <h2>Complete the outfit:</h2>
          <div className="c-outfit__row row">
            <div className="col-sm-12 col-md-12 c-outfit__cards">
              <div className="card-">
                <img src="/img/extra4.jpg" alt="complete outfit" />
                <span className="title">Freedom T-Shirt</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra7.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra5.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra1.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outfit-wrapper">
        <div className="c-outfit container">
          <h2>Others also bought</h2>
          <div className="c-outfit__row row">
            <div className="col-sm-12 col-md-12 c-outfit__cards">
              <div className="card-">
                <img src="/img/extra6.jpg" alt="complete outfit" />
                <span className="title">Freedom T-Shirt</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra3.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra8.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
              <div className="card-">
                <img src="/img/extra9.jpg" alt="complete outfit" />
                <span className="title">Stretch Eco Blue Jeans</span>
                <span className="price">$38.52</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
