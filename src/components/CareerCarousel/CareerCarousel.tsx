import React from "react";

const CareerCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div
            id="carousel-custom"
            className="carousel slide"
            data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img
                  src="http://placehold.it/1400x600&text=slide1"
                  alt="..."
                  className="img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="http://placehold.it/1400x600&text=slide2"
                  alt="..."
                  className="img-responsive"
                />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#carousel-custom"
              role="button"
              data-slide="prev">
              <i className="fa fa-chevron-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-custom"
              role="button"
              data-slide="next">
              <i className="fa fa-chevron-right"></i>
              <span className="sr-only">Next</span>
            </a>

            <ol className="carousel-indicators visible-sm-block hidden-xs-block visible-md-block visible-lg-block">
              <li
                data-target="#carousel-custom"
                data-slide-to="0"
                className="active">
                <img
                  src="http://placehold.it/100x50&text=slide1"
                  alt="..."
                  className="img-responsive"
                />
              </li>
              <li data-target="#carousel-custom" data-slide-to="1">
                <img
                  src="http://placehold.it/100x50&text=slide2"
                  alt="..."
                  className="img-responsive"
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCarousel;
