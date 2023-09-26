import React from "react";

// style start
import "./style/CareerSecond.css";
import "./style/AdaptiveCareerSecond.css";
// style end

const CareerSecond = () => {
  return (
    <div className="container career_second_container">
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>Возможности</h3>
          <p>
            Мы ценим в своих работниках стремление к достижению результата,
            готовность работать в команде и брать на себя ответственность. Для
            этого мы предоставляем широкие возможности для раскрытия
            собственного потенциала и карьерного роста своих работников и
            обеспечиваем рабочую среду, которая значима, продуктивна,
            справедлива и уважает гармоничную жизнь.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/career-img-2.383387e7.png"
          alt=""
        />
      </div>
      <div className="coope_second_item">
        <div className="coope_second_left_block">
          <h3>О кадровой политике</h3>
          <p className="career_second_block_left_border">
            Основная цель формирования кадровой политики ОсОО «Cool Bro’s» –
            получение максимальной отдачи от инвестиций в персонал через
            построение системы, которая:
          </p>
          <ul>
            <li>
              мотивирует каждого работника к достижению целей, обусловленных
              стратегическим планом компании.
            </li>
            <li>способна объективно оценить степень достижения результатов.</li>
            <li>справедливо вознаграждает и поощряет за их достижение.</li>
          </ul>
          <p>
            Все работники ОсОО «Cool Bro’s» разделяют такие принципы кадровой
            политики как:
          </p>
          <ul>
            <li>Как Компания и как отдельные личности, мы действуем этично.</li>
            <li>Мы относимся ко всем людям с уважением.</li>
            <li>
              Мы прозрачны и открыты в отношении нашей работы и того как мы это
              делаем.
            </li>
            <li>
              Мы прозрачны и открыты в отношении нашей работы и того как мы это
              делаем.
            </li>
          </ul>
        </div>
        <img
          src="https://coolbrs.com/static/media/career-img-3.2980954d.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CareerSecond;
