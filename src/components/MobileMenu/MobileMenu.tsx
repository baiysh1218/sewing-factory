import React from "react";

// style css start
import "./style/MobileMenu.css";
import "./style/AdaptiveMobileMenu.css";
// style css end
// media start
import {
  Career,
  Catalog,
  Cooperation,
  Design,
  Production,
} from "../../assets/pngComponents/PngComponent";
// media and

// i18n start
import { useTranslation } from "react-i18next";
// i18n end

const MobileMenu = () => {
  // ? i18n start
  const { t } = useTranslation();
  // i18n end
  return (
    <>
      <div className="container mobile_menu_container">
        <ul className="mobile_menu">
          <li>{t("navbar.title_coop")}</li>
          <li>{t("navbar.title_design")}</li>
          <li>{t("navbar.title_product")}</li>
          <li>{t("navbar.title_career")}</li>
          <li>{t("navbar.title_catalog")}</li>
        </ul>
        <ul className="mobile_menu_icons">
          <Cooperation className="mobile_nav_item" />
          <Design className="mobile_nav_item" />
          <Production className="mobile_nav_item" />
          <Career className="mobile_nav_item" />
          <Catalog className="mobile_nav_item" />
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
