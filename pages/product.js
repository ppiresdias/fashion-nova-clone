import Image from "next/image";
import Head from "next/head";

const Product = () => {
  return (
    <div>
      <Head>
        <title>[product name]</title>
      </Head>
      <div className="product-wrapper">
        <div className="product container">
          <div className="product__row row ">
            <div className="col-sm-12 col-md-6 product__left-column">
              <div className="main-img">
                <img src="/img/jeans4.jpg" alt="jeans" />
              </div>
              <div className="grid-img">
                <img src="/img/jeans1.jpg" alt="jeans" />
                <img src="/img/jeans2.jpg" alt="jeans" />
                <img src="/img/jeans3.jpg" alt="jeans" />
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
      </div>
    </div>
  );
};

export default Product;
