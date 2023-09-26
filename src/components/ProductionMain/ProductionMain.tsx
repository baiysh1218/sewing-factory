import React from "react";

// style start
import "./style/ProductionMain.css";
import "./style/AdaptiveProductionMain.css";
// style end

const ProductionMain = () => {
  return (
    <div className="production_wrapper">
      <div className="container production_main_container">
        <div className="production_left_block">
          <h2>Производство</h2>
          <p>
            На сегодняшний день на 2 фабриках ОсОО «Кул Брос» и 4 аффилированных
            фабриках в совокупности трудятся более 1500 сотрудников, их
            суммарная производственная мощность полностью соответствует
            заявленным цифрам и работает с постоянным показателем до 50 000
            изделий в день.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/production-img-1.3c351c30.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductionMain;
