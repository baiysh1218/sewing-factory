// style start
import "./style/CareerMain.css";
import "./style/AdaptiveCareerMain.css";
// style end

const CareerMain = () => {
  return (
    <div className="career_main_wrapper">
      <div className="container container_career_main">
        <div className="career_left_block">
          <h2>Карьера</h2>
          <p>
            ОсОО «Cool Bro’s» - динамично развивающаяся компания,
            предоставляющая широкие возможности для профессионального и
            карьерного развития своих работников. Наш коллектив - это команда
            профессионалов, которая реализует стратегическую цель ОсОО «Cool
            Bro’s» - становление как лидера-швейного холдинга в Центральной
            Азии.
          </p>
        </div>
        <img
          src="https://coolbrs.com/static/media/career-img-1.44663a18.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CareerMain;
