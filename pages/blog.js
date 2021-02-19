import React from "react";
import Link from "next/link";
import Head from "next/head";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="blog">
        <div className="blog__header-wrapper">
          <header className="blog__header">
            <h1>Blog</h1>
          </header>
        </div>

        <div className="cards-wrapper">
          <div className="cards container">
            <div className="row flex-column left-column">
              <div className="recent">
                <h4>RECENT ARTICLES</h4>
                <Link href="/blogpage">
                  <a>Outfit of the day</a>
                </Link>
                <Link href="/blogPage">
                  <a>Clothing Paradise</a>
                </Link>
                <Link href="/blogPage">
                  <a>Style beyond Imagination</a>
                </Link>
              </div>
              <div className="tags">
                <h4>Tags</h4>
                <Link href="#">
                  <a>Awesome</a>
                </Link>
                <Link href="#">
                  <a>Summer</a>
                </Link>
                <Link href="#">
                  <a>Winter</a>
                </Link>
                <Link href="#">
                  <a>Vintage</a>
                </Link>
              </div>
            </div>

            <div className="cards__row row">
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/fashion.jpg"
                    alt="fashion"
                  />
                  <span className="card__date">06 FEB, 2021</span>
                  <h1 className="card__title">Clothing Paradise</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/dark-hair.jpg"
                    alt="dark hair"
                  />
                  <span className="card__date">10 JUN, 2021</span>
                  <h1 className="card__title">Outfit of the day</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/young-female.jpg"
                    alt="young female"
                  />
                  <span className="card__date">10 NOV, 2020</span>
                  <h1 className="card__title">Brands You Should Know</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/dark.jpg"
                    alt="fashion"
                  />
                  <span className="card__date">23 DEC, 2020</span>
                  <h1 className="card__title">Style beyond Imagination</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/pink.jpg"
                    alt="dark hair"
                  />
                  <span className="card__date">29 DEC, 2020</span>
                  <h1 className="card__title">Glam Life</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="card">
                  <img
                    className="card__img"
                    src="/img/group.jpg"
                    alt="young female"
                  />
                  <span className="card__date">29 JUL, 2020</span>
                  <h1 className="card__title">Warm Weather Collection</h1>
                  <p className="card__content">
                    eiusmod tempor incididunt ut labore et dolore Lorem
                    ipsumadipisicing elit, sed do magna aliqua dolor sit amet
                    conse ctetur...{" "}
                    <Link href="/blogPage">
                      <a>
                        Read More <AiOutlineArrowRight />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
