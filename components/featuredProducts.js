export default function FeaturedProducts() {
  return (
    <section className="container">
      <div className="feature__products">
        <h2>Featured products</h2>
        <div className="row">
          <a href="/product" className="card col-12 col-sm-6 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/mVGW8j9rrC4/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Blue navy suit</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>
          <a href="/product" className="card col-12 col-sm-6 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/NsYo3O3HVx4/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Floral Pants</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>
          <a href="/product" className="card col-12 col-sm-12 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/pU4J5VFnqCQ/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Black and White Dress</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>

          <a href="/product" className="card col-12 col-sm-6 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/BOHyxqepP9Y/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Black top</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>

          <a href="/product" className="card col-12 col-sm-6 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/6Xai7XxOgBc/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Red Dress</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>

          <a href="/product" className="card col-12 col-sm-12 col-lg-4">
            <img
              loading="lazy"
              className="card-img-top"
              src="https://source.unsplash.com/L6N99o-UCnc/1920x2880"
            />

            <div className="card-body">
              <h5 className="card-title text-center">Orange Dress</h5>

              <div className="card__body__price d-flex justify-content-center">
                <p className="card-text previous__price">$139.00</p>
                <p className="card-text">$99.00</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
