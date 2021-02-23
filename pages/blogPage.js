import React from "react";
import Head from "next/head";

const blogPage = () => {
  return (
    <>
      <Head>
        <title>[Blog Title]</title>
      </Head>
      <div className="blog-page">
        <div className="blog-page__container container">
          <div className="blog-page__row row">
            <div className="blog-page__col col-sm-12">
              <img className="img" src="/img/dark.jpg" alt="dark" />
              <div className="blog-page__content">
                <span className="date"> 10 FEB, 2021</span>
                <h1 className="title">Style beyond Imagination</h1>
                <p className="content">
                  Fashion and style industry is rapidly growing and in the past
                  few years it has expanded its wings all corners of the world.
                  All the names including the best of national and international
                  brands are providing the finest in fashion and styling
                  accessories at nominal prices. All brands know the potential
                  of having a worldwide market. Whether you require sunglasses,
                  cologne, watches, bags or have any other fashion need, there
                  are many brands ready to cater to any fashion needs. They
                  provide products with high style quotient and quality while
                  keeping in mind the needs of the customer. A watch is an
                  essential part of attire and is also considered an integral
                  fashion accessory. It not only has a utilitarian value but is
                  also an extension of one’s personality. <br /> <br />
                  Many renowned brands are providing state of the art timepieces
                  with exquisite designs and multifaceted features. You can
                  browse the latest collections of Casio, Tissot, Fossil, Titan
                  Raga watches online. Such brands incorporate skilled
                  craftsmanship along with innovative technology in their
                  exquisite watches. They provide a whole world on your wrist
                  and do it so with style. One can find all their favourite
                  fashion brands with their latest selection online in just few
                  clicks.Online shopping provides a convenient way of shopping
                  from the comfort of your home.
                  <br /> <br /> All the major fashion labels understand the
                  internet as an important platform for shopping and reaching
                  out to people all around the world. Among other popular
                  accessories are sunglasses, bags and clothing apparel.
                  Sunglasses play the crucial role of protecting your eyes and
                  do it so in style. There are many companies that offer the
                  most elegant designs and styles at prices that will leave your
                  pocket smiling. There is wide catalogue of sunglasses
                  available for men & women from the best in fashion industry.
                  Among the popular styles of sunglasses both for men and women
                  are Aviators, Wayfarers, Wraparound, Polarized, Fashion,
                  Sportswear etc.Get the best of brands and collection, from
                  Fastrack sunglasses for girls to Ray Ban unisex sunglasses
                  price in India. When it comes to bags there are numerous
                  choices available in all the categories including college
                  bags, backpacks, travel accessories, luggage bags, laptop
                  bags, small bags or many more. Names such as American
                  Tourister and Golla bags have been providing high quality
                  products that are not only durable and strong but also have
                  high style quotient.
                  <br /> <br /> Collections such as American Tourister laptop
                  backpack and Golla laptop sleeves are quite popular among the
                  young crowd of today. One can browse the details of the latest
                  collection and wide selection of products of numerous
                  companies in a click of a button. Many of the sites are also
                  providing facilities such as return back policy, free shipping
                  and delivery to your doorstep, making online shopping a very
                  convenient and enjoyable experience for their customers. So
                  buy authentic Armani watch or Buy Best Timex Watches at Lowest
                  Price in India in just few clicks. Online shopping has become
                  a convenient and reliable form of shopping saving time from
                  visiting various outlets by providing the complete catalogue
                  from various brands at a click of a button.
                </p>
              </div>
            </div>
          </div>
          <div className="blog-page__row row">
            <div className="col-sm-12 col-md-12">
              <div className="blog-page__buttons">
                <button className="button">PREVIOUS</button>
                <button className="button">NEXT</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12">
              <div className="blog-page__comment">
                <h2>Leave a comment</h2>
                <label>Name</label>
                <input placeholder="Your name" />
                <label>Email Address</label>
                <input placeholder="your@example.com" />
                <label>Comment</label>
                <textarea placeholder="your comment" />
                <button>Post comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogPage;
