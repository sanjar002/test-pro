import { useState } from 'react';
import Html from '../../pages/course/images/html.svg';
import Css from '../../pages/course/images/css 1.png';
import Scss from '../../pages/course/images/scss.png';
import Js from '../../pages/course/images/js.png';
import ReactImg from '../../pages/course/images/react.png';
import Redux from '../../pages/course/images/redux.png';
import Mui from '../../pages/course/images/mui.png';

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
      name: "SCSS",
      image: Scss,
      title: "Sass (англ. Syntactically Awesome Stylesheets) — метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей. Включён в состав языка разметки Haml.",
      id:3
    },
    {
      name:"Java Script",
      image: Js,
      title: "JavaScript- көп парадигмалуу программалоо тили. Объектиге багытталган, императивдүү жана функциялык стилдерди колдойт. ECMAScript тилинин (ECMA-262-стандарты) ишке ашырылышы болуп саналат.",
      id: 4
    },
    {
      name: "React",
      image: ReactImg,
      title: "React - бул акысыз жана ачык булактуу алдыңкы JavaScript китепканасы компоненттеринин негизинде колдонуучу интерфейстерин куруу.",
      id: 5
    },
    {
      name: "Redux",
      image: Redux,
      title: "Redux бул ачык булак JavaScript китепканасы тиркемелердеги абалды башкаруу үчүн колдонулат жана Elm функционалдык тили таасир этет. Ал көбүнчө колдонуучу интерфейстерин түзүү үчүн React же Angular сыяктуу башка китепканалар менен бириктирилет. ",
      id: 6
    },
    {
      name: "MUI",
      image: Mui,
      title: "Magic User Interface (MUI) – бул Стефан Штунц тарабынан графикалык колдонуучу интерфейсин түзүү жана иштетүү үчүн иштелип чыккан объектке багытталган система.",
      id: 7
    }
];

const Curs = () => {
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

export default Curs;
