import React from "react";

// style start
import "../Hero/style/Hero.css";
import "../Hero/style/AdaptiveHero.css";
// style end

// media start
import { ReactComponent as SewingMachine } from "../../assets/svg/sewingMachine.svg";
// media end

// layout start
import Button from "../../layout/Button/Button";
// layout end

const Hero = () => {
  return (
    <main>
      <div className="container main_wrapper">
        <div className="main_left_block">
          <h1>
            Мы производим трикотажные изделия <br /> <b>более 10 лет</b>
          </h1>
          <p>
            Мы поможем увеличить продажи и поднять Ваш бизнес на новый уровень
          </p>
          <Button>Узнать больше</Button>
        </div>
        <div className="main_right_block">
          <SewingMachine />
        </div>
      </div>
    </main>
  );
};

export default Hero;
