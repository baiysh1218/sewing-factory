// media start
import { ReactComponent as Design } from "../../assets/svg/design.svg";
import { ReactComponent as Production } from "../../assets/svg/production.svg";
import { ReactComponent as Career } from "../../assets/svg/career.svg";
import { ReactComponent as Catalog } from "../../assets/svg/catalog.svg";
// media end

// style start
import "./style/AboutLinks.css";
import "./style/AdaptiveAboutLinks.css";
// style end

const AboutLinks = () => {
  return (
    <div className="about_links_wrapper">
      <div
        style={{
          backgroundImage:
            "url(https://coolbrs.com/static/media/design-center.370ea7dd.png)",
        }}
        className="about_links_item">
        <div className="about_links_content">
          <Design />
          <p>Дизайн центр</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://coolbrs.com/static/media/production.b9a2543b.png)",
        }}
        className="about_links_item">
        <div className="about_links_content">
          <Production />
          <p>Производство</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://coolbrs.com/static/media/career.9466d140.png)",
        }}
        className="about_links_item">
        <div className="about_links_content">
          <Career />
          <p>Карьера</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://coolbrs.com/static/media/catalog.96b6eb0e.png)",
        }}
        className="about_links_item">
        <div className="about_links_content">
          <Catalog />
          <p>Каталог</p>
        </div>
      </div>
    </div>
  );
};

export default AboutLinks;
