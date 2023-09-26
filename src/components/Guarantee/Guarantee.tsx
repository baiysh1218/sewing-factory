import React from "react";

// style start
import "./style/Guarantee.css";
import "./style/AdaptiveGuarantee.css";
// style end

// media start
import { ReactComponent as Quality } from "../../assets/svg/quality.svg";
import { ReactComponent as Range } from "../../assets/svg/range.svg";
import { ReactComponent as Short } from "../../assets/svg/short.svg";
import { ReactComponent as Support } from "../../assets/svg/support.svg";
// media end

const Guarantee = () => {
  return (
    <div className="container guarantee_container">
      <div className="guarantee_head">
        <h3>Мы гарантируем</h3>
      </div>
      <div className="guarantee_content">
        <div className="guarantee_item">
          <Quality />
          <b>Высокое качество</b>
          <ul>
            <li>строгий контроль качества на всех этапах</li>
            <li>высококвалифицированные специалисты</li>
            <li>соответствие международным стандартам</li>
          </ul>
        </div>
        <div className="guarantee_item">
          <Range />
          <b>Широкий ассортимент</b>
          <ul>
            <li>изделия любой сложности</li>
          </ul>
        </div>
        <div className="guarantee_item">
          <Short />
          <b>Короткие сроки</b>
          <ul>
            <li>мощность более 50 000 изделий в сутки</li>
          </ul>
        </div>
        <div className="guarantee_item">
          <Support />
          <b>Поддержка клиентов</b>
          <ul>
            <li>маркетинговое сопровождение</li>
            <li>консалтинговая поддержка</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
