import React, { useEffect, useState } from "react";
// i18n start
import { useTranslation } from "react-i18next";
// i18n end

// layout start
import Button from "../../layout/Button/Button";
import SecondRightBloks from "../../layout/SecondRightBloks/SecondRightBloks";
// layout end

// style start
import "./style/Second.css";
import "./style/AdaptiveSecond.css";
import styled from "styled-components";
import { ISecondBlockStyles } from "../../model/componentsType";

// style end

const Second = () => {
  // state start
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrolledToContainer, setIsScrolledToContainer] =
    useState<boolean>(false);
  const [isBelowContainer, setIsBelowContainer] = useState<boolean>(false);

  // state end

  // translate start

  const { t } = useTranslation();

  // translate end

  // scroll start
  useEffect(() => {
    const handleScroll = (): void => {
      const container = document.querySelector(".container_second");
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;

        const scrollStart = containerTop - window.innerHeight;
        const scrollEnd = containerTop + 1500; // Вы можете использовать высоту блока, как 1500px, как в вашем коде

        if (window.scrollY >= scrollStart && window.scrollY <= scrollEnd) {
          setIsScrolledToContainer(true);
          setIsBelowContainer(false); // Пользователь внутри блока
        } else if (window.scrollY > scrollEnd) {
          setIsBelowContainer(true); // Пользователь ниже блока
        } else {
          setIsScrolledToContainer(false);
          setIsBelowContainer(false);
        }
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fastScrollSpeed = 0.9;
  const normalScrollSpeed = 0.7;

  // scroll end

  return (
    <div className="container container_second">
      <div className="second_left_block">
        <h2>{t("second.head")}</h2>
        <p>{t("second.description")}</p>
        <Button>{t("second.button")}</Button>
      </div>
      <div className="second_right_block">
        <div className="second_info_start_block">
          <div
            style={{
              transform:
                isScrolledToContainer && !isBelowContainer
                  ? `translateY(${scrollY * fastScrollSpeed}px)`
                  : `translateY(${scrollY * fastScrollSpeed})`,
            }}
            className="before_element orange"></div>
          <SecondRightBloks>
            <b>10</b>
            <span>лет опыта</span>
          </SecondRightBloks>
        </div>
        <div className="second_info_center_block">
          <div
            style={{
              transform:
                isScrolledToContainer && !isBelowContainer
                  ? `translateY(${-scrollY * fastScrollSpeed}px)`
                  : `translateY(${-scrollY * fastScrollSpeed})`,
            }}
            className="before_element_bottom red"></div>

          <SecondRightBloks>
            <b>50 000</b>
            <span>изделии в сутки</span>
          </SecondRightBloks>
          <SecondRightBloks>
            <b>4</b>
            <span>иннавационных фабрик</span>
          </SecondRightBloks>
        </div>
        <div className="second_info_end_block">
          <div
            style={{
              transform:
                isScrolledToContainer && !isBelowContainer
                  ? `translateY(${scrollY * normalScrollSpeed}px)`
                  : `translateY(${scrollY * normalScrollSpeed}px)`,
            }}
            className="before_element blue"></div>

          <SecondRightBloks>
            <b>1500</b>
            <span>сотрудников</span>
          </SecondRightBloks>
        </div>
      </div>
    </div>
  );
};

export default Second;
