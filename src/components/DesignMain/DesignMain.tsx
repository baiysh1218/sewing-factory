import React from "react";

// style start
import "./style/DesignMain.css";
import "./style/AdaptiveDesignMain.css";
// style end

const DesignMain = () => {
  return (
    <div className="design_center_wrapper">
      <div className="container design_center_container">
        <div className="design_main_left">
          <h2>Экспериментально - технический центр</h2>
          <p>
            Современный мир не представить без разнообразия фасонов и видов
            одежды. Появляются новые материалы, декор, новые виды обработки и
            сборки изделий.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/cooperation-img-1.e772f207.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DesignMain;
