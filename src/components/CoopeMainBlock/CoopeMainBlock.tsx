import React from "react";

// style start
import "./style/CoopeMainBlock.css";
import "./style/AdaptiveCoopeMainBlock.css";
// style end

const CoopeMainBlock = () => {
  return (
    <div className="coope_main_wrapper">
      <div className="container coope_container">
        <div className="coope_left_block">
          <p>
            Мы <b>развиваем бизнес наших клиентов</b>, выстраивая доверительные
            партнёрские отношения.
          </p>
          <p>
            В сотрудничестве мы строго следуем нашим основным принципам: объём,
            качество, сроки и выгодные цены.
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

export default CoopeMainBlock;
