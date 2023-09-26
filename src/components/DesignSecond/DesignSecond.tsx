import React from "react";

// style start
import "./style/DesignSecond.css";
// style end

const DesignSecond = () => {
  return (
    <div className="container design_second_container">
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Стандарты качества</h3>
          <p>
            Отработанные технологии и подробная техническая документация
            гарантируют строгое соответствие качества пошива заказа в
            соответствии с согласованным образцом-эталоном. Обладая большим
            опытом работы с широким и разнообразным ассортиментом, наши
            профессионалы выполнят работу любой сложности.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/cooperation-img-2.56b4a55f.png"
          alt=""
        />
      </div>
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Что мы делаем?</h3>
          <p>В экспериментально-техническом центре нашей Компании:</p>
          <ul>
            <li>оперативно разрабатываются модели одежды</li>
            <li>отшиваются экспериментальные образцы</li>
            <li>
              подготавливаются технологические паспорта для запуска заказа в
              массовое производство на наших фабриках
            </li>
            <li>
              изготавливаются лекала для производства на изделия любой сложности
            </li>
            <li>
              предлагаются различные варианты конструкторских и дизайнерских
              решений
            </li>
          </ul>
        </div>
        <img
          src="https://coolbrs.com/static/media/cooperation-img-3.30621549.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DesignSecond;
