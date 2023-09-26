// media start
import { ReactComponent as FullLoop } from "../../assets/svg/fullLoop.svg";
import { ReactComponent as HightQuality } from "../../assets/svg/highQuality.svg";
import { ReactComponent as Accessories } from "../../assets/svg/accessories.svg";
import { ReactComponent as FabricPrinting } from "../../assets/svg/fabricPrinting.svg";
import { ReactComponent as Choice } from "../../assets/svg/choice.svg";
import { ReactComponent as LoyaltyPolicy } from "../../assets/svg/loyaltyPolicy.svg";
// media end
// style start
import "./style/CoopeAdvantages.css";
import "./style/AdaptiveCoopeAdvantages.css";
// style end

const CoopeAdvantages = () => {
  return (
    <div className="container container_advantages">
      <div className="advantages_head">
        <h3>Преимущества нашей компании:</h3>
      </div>
      <div className="advantages_wrapper">
        <div className="advantages_item">
          <FullLoop />
          <h2>Полный цикл производства и логистики</h2>
          <p>
            Мы обеспечиваем качественное, своевременное и комплексное
            производство продукции: от разработки лекал и пошива образцов до
            пошива крупной партии одежды и ее доставки. Обеспечиваем полное
            документальное сопровождение.
          </p>
        </div>
        <div className="advantages_item">
          <HightQuality />
          <h2>Качество, ассортимент, выгодные цены</h2>
          <p>
            Благодаря собственной мощной производственной базе, мы гарантируем
            непревзойдённое качество всей продукции. Собственное производство
            позволяет нам устанавливать максимально выгодные цены на весь
            богатый ассортимент продукции.
          </p>
        </div>
        <div className="advantages_item">
          <Accessories />
          <h2>Закупка ткани, фурнитуры</h2>
          <p>
            Мы предлагаем профессиональную помощь в поиске поставщиков в подборе
            качественных тканей и фурнитуры для пошива одежды, проверки на
            соответствие, закуп и доставку.
          </p>
        </div>
        <div className="advantages_item">
          <FabricPrinting />
          <h2>Печать на ткани</h2>
          <p>
            Мы предлагаем срочную и недорогую печать на всех видах ткани:
            безупречный результат, доступные цены, любые тиражи. Если вам нужны
            дизайнерские услуги, с удовольствием разработаем индивидуальный
            макет, соответствующий вашим пожеланиям.
          </p>
        </div>
        <div className="advantages_item">
          <Choice />
          <h2>Возможность выбора</h2>
          <p>
            Компания предлагает большой выбор готовой продукции, а так же услуги
            массового пошива ваших заказов на наших фабриках.
          </p>
        </div>
        <div className="advantages_item">
          <LoyaltyPolicy />
          <h2>Политика лояльности</h2>
          <p>
            Для постоянных оптовых покупателей и заказчиков действует гибкая
            система скидок. Сроки исполнения проектов мы не срываем независимо
            от объема и тиража. Доставку заказов производим с помощью
            транспортных компаний.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoopeAdvantages;
