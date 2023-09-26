// style start
import "./style/Navbar.css";
import "./style/AdaptiveNavbar.css";
// style end

// react start
import { useEffect, useState, useRef } from "react";
// react end

// icons start
import { ReactComponent as LogoNav } from "../../assets/svg/logoSvg.svg";
import { ReactComponent as LogoEmail } from "../../assets/svg/navEmailIcon.svg";
import { ReactComponent as LogoInstagram } from "../../assets/svg/instagramNavbar.svg";
import { ReactComponent as LogoFacebook } from "../../assets/svg/faceBookNavbar.svg";
import { ReactComponent as RussianFlag } from "../../assets/svg/russianFlag.svg";
import { ReactComponent as USAFlag } from "../../assets/svg/usaFlag.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
// iconst end

// redux start
import { useSelector, useDispatch } from "react-redux";
// redux end

// types start
import { IState } from "../../utils/types";
// types end

// i18n start
import i18n from "../../language/i18next/i18next";
import { changeLanguage } from "../../redux/slicer/languageSlice/languageSlice";
import { useTranslation } from "react-i18next";
// i18n end

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // ? state start
  const [isOpenLanguageDropDown, setIsOpenLanguageDropDown] =
    useState<boolean>(false);
  // ? state end

  // ? ref start
  const navItemRef = useRef<HTMLUListElement>(null);
  // ? ref end

  // ? redux start

  const language: string = useSelector((state: IState) => state.language);
  const dispatch = useDispatch();

  // ? redux end

  // ? i18n start
  const { t } = useTranslation();
  // ? i18n end

  // ? navigate start
  const navigate = useNavigate();
  // ? navigate end

  // ? functions start
  const handleChangeDropDownLanguage = (): void => {
    setIsOpenLanguageDropDown(!isOpenLanguageDropDown);
  };

  const handleCloseDropDown = (language: string): void => {
    dispatch(changeLanguage(language));
    setIsOpenLanguageDropDown(false);
  };

  const currentPath = () => {
    if (navItemRef.current) {
      // console.log(navItemRef.current.children);

      const childrenUlElement = navItemRef.current.children;

      const currentPath = window.location.pathname;

      for (let i = 0; i < childrenUlElement.length; i++) {
        if (`/${childrenUlElement[i].id}` === currentPath) {
          childrenUlElement[i].classList.add("active");
        } else {
          childrenUlElement[i].classList.remove("active");
        }
      }

      // navItemRef.current;
    }
  };

  // ? functions end

  // ? useEffects start

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    currentPath();
  }, [window.location.pathname]);

  // ? useEffects end

  return (
    <>
      <div id="top"></div>
      <nav>
        <div className="container nav_container">
          <div className="nav_wrapper">
            <div className="nav_logo">
              <LogoNav onClick={() => navigate("/")} />
            </div>
            <ul ref={navItemRef}>
              <li id="cooperation" onClick={() => navigate("/cooperation")}>
                {t("navbar.title_coop")}
              </li>
              <li id="design-center" onClick={() => navigate("/design-center")}>
                {t("navbar.title_design")}
              </li>
              <li id="production" onClick={() => navigate("/production")}>
                {t("navbar.title_product")}
              </li>
              <li id="career" onClick={() => navigate("/career")}>
                {t("navbar.title_career")}
              </li>
              <li id="catalog">{t("navbar.title_catalog")}</li>
            </ul>
            <div className="nav_links">
              <a href="#">
                <LogoEmail />
                <span>test@gmail.com</span>
              </a>
              <a href="#">
                <LogoInstagram />
              </a>
              <a href="#">
                <LogoFacebook />
              </a>
            </div>
            <div className="nav_language">
              <div
                className="current_language"
                onClick={handleChangeDropDownLanguage}>
                {language === "ru" ? <RussianFlag /> : <USAFlag />}
                <span>{language === "ru" ? "RU" : "EN"}</span>
                <Arrow
                  className={isOpenLanguageDropDown ? "nav_language_arrow" : ""}
                />
              </div>
              <div
                className={`language_change_drop_down ${
                  isOpenLanguageDropDown ? "active" : ""
                }`}>
                <ul>
                  <li onClick={() => handleCloseDropDown("en")}>English</li>
                  <li onClick={() => handleCloseDropDown("ru")}>Russian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
