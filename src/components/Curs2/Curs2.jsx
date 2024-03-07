import { useState } from 'react';
import Html from '../../pages/course/images/html.svg';
import Css from '../../pages/course/images/css 1.png';
import Js from '../../pages/course/images/js.png';
import bootstrap from '../../pages/course/images/bootstrap.png';
import Scratch from '../../pages/course/images/scracht.png';
import "../../pages/course/Course.scss";

const front = [
    {
      name: "HTML",
      image: Html,
      title: "HTML (англ. HyperText Markup Language — «гипертекстти белгилөө тили») - дүйнөлүк желедеги документтерди стандарттык белгилөө тили. Көпчүлүк веб-баракчалар HTML (же XHTML) тилинде жазылат. HTML тили браузер менен которулуп, кишиге ыңгайлуу документ калыбында көрсөтүлөт.",
      id: 1
    },
    {
      name: "CSS",
      image: Css,
      title: "CSS (англ. Cascading Style Sheets -каскаддык стилдер жадыбалы) - белгилөө тили (HTML,XML) менен жазылган документтин тыш көрүнүшүн сүрөттөөчү формалдуу тил.",
      id: 2
    },
    {
      name:"JavaScript",
      image: Js,
      title: "JavaScript- көп парадигмалуу программалоо тили. Объектиге багытталган, императивдүү жана функциялык стилдерди колдойт. ECMAScript тилинин (ECMA-262-стандарты) ишке ашырылышы болуп саналат.",
      id: 3
    },
    {
      name: "BOOTSTRAP",
      image: bootstrap,
      title: "Bootstrap бул веб-сайттарды жана веб-тиркемелерди түзүү үчүн акысыз куралдар топтому. Типография, веб формалар, баскычтар, энбелгилер, навигация блоктору жана башка веб интерфейс компоненттери, анын ичинде JavaScript кеңейтүүлөрү үчүн HTML жана CSS дизайн үлгүлөрүн камтыйт.",
      id: 4
    },
    {
        name: "SCRATCH",
        image: Scratch,
        title: "Scratch – бул балдар жана өспүрүмдөр үчүн түзүлгөн визуалдык блокко негизделген окуяга негизделген программалоо чөйрөсү. Аталышы скретчинг деген сөздөн келип чыккан, хип-хоп ди-джейлери музыкалык темаларды аралаштыруу үчүн колдору менен винил пластинкаларын алдыга жана артка айланткан ыкма.",
        id: 5
      }
];

const Curs2 = () => {
  const [expandedProducts, setExpandedProducts] = useState([]);

  const handleCollapseToggle = (productId) => {
    setExpandedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-20 mx-auto">
         

          <div className="flex flex-wrap">
            {front.map((el) => (
              <div key={el.id} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <img src={el.image} alt="" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-sans font-semibold title-font mb-2">{el.name}</h2>
                  <p className="leading-relaxed font-sans text-base">
                    {expandedProducts.includes(el.id) ? el.title : el.title.slice(0, 80)}
                  </p>
                  <span
                  style={{textDecoration: "underline"}}
                    onClick={() => handleCollapseToggle(el.id)}
                    className=" text-black  border-0 py-2 cursor-pointer  focus:outline-none rounded font-sans text-sg"
                  >
                    {expandedProducts.includes(el.id) ? 'Кыскартуу' : 'Толук маалымат'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curs2;
