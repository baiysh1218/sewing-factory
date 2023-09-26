import React from "react";

// style start
import "./style/CoopeSecondBlock.css";
import "./style/AdaptiveCoopeSecondBlock.css";
// style end

const CoopeSecondBlock = () => {
  return (
    <div className="container coope_second_container">
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Кто мы</h3>
          <p>
            Компания ОсОО «Cool Bro’s» - это комплексное швейное производство,
            фабрика полного цикла по пошиву трикотажных изделий самого разного
            назначения и сферы использования. Компания является одним из лидеров
            швейной отрасли в Кыргызстане и Центральной Азии, имеющая мощную
            производственную базу - 2 фабрики и 4 аффилированные фабрики,
            позволяющая в месяц производить 50 000 изделий. Фабрики оснащены
            современным и высокотехнологичным оборудованием. ОсОО «Cool Bro’s»
            экспортирует более 90% своей продукции. За долгие годы работы
            компания зарекомендовала себя на рынке стран СНГ как надежный
            партнер и в 2020 году вышла на рынок Европы.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/cooperation-img-2.56b4a55f.png"
          alt=""
        />
      </div>
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Наша философия</h3>
          <p>
            С самого начала компания ставила перед собой цель изготовление
            высококачественной продукции. Каждая модель проходит строгий
            контроль - от разработки опытными дизайнерами и конструкторами, до
            отшива и упаковки. Мы гарантируем отличное качество и широкий
            ассортимент выпускаемой продукции.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/cooperation-img-3.30621549.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CoopeSecondBlock;
