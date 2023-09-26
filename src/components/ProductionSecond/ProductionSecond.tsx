import React from "react";

// style start
import "./style/ProductionSecond.css";
import "./style/AdaptiveProductionSecond.css";
// style end

const ProductionSecond = () => {
  return (
    <div className="container production_second_container">
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Наше оборудование</h3>
          <p>
            Парк оборудования на 100% соответствует требованиям технической
            безопасности и эргономики и состоит только из автоматизированных
            модификаций. Это марки таких промышленных швейных машин, как Jack,
            Kingtex и других надёжных мировых брендов.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/production-img-2.93ed3288.png"
          alt=""
        />
      </div>
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Качественный материал</h3>
          <p>
            Нам доступно производство любых швейных изделий из текстильного и
            трикотажного полотна. Мы производим закупку и строгий отбор только
            качественного и уникального сырья из Китая, Турции, Узбекистана,
            Индии и других проверенных производителей, что в совокупности с
            отлаженной логистикой готовой продукции, обеспечивает доставку в
            любую точку ЕАЭС и за её пределами.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/production-img-3.8feca040.png"
          alt=""
        />
      </div>
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Профессиональный подход</h3>
          <p>
            Компания имеет в своем распоряжении дизайнерский и маркетинговый
            центры, где идет разработка новых, востребованных рынком моделей,
            согласно спросу и с учётом всех последних трендов. Работа ведется на
            современных графических программах с использованием
            автоматизированной раскладки и цифровой печати на плоттерных станках
            для наилучшего качества лекал и образцов.
            <br />
            Главный упор отдается качеству пошива изделий, мы тщательно
            подбираем технологии и методы обработки для наилучшего результата!
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/production-img-4.92bfacf5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductionSecond;
