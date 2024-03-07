// import React, { useState } from 'react'
// Front-End
// import Html from './images/html.svg';
// /import Css from './images/css 1.png';
// import Scss from './images/scss.png';
// import React from './images/react.png';
// import Redux from './images/redux.png';
// import Mui from './images/mui.png';
// Back-End
// import Python from './images/python.png';
// import Django from './images/django.png';
// //Kids
import "./Course.scss";
import Curs from "../../components/Curs/Curs";
import Curs2 from "../../components/Curs2/Curs2";
import BackEnd from "../../components/BackEnd/BackEnd";

// const front = [
//   {
//     name: "HTML",
//     image: Html,
//     title: "HTML (англ. HyperText Markup Language — «гипертекстти белгилөө тили») - дүйнөлүк желедеги документтерди стандарттык белгилөө тили. Көпчүлүк веб-баракчалар HTML (же XHTML) тилинде жазылат. HTML тили браузер менен которулуп, кишиге ыңгайлуу документ калыбында көрсөтүлөт."
//   },
//   {
//     name: "CSS",
//     image: Css,
//     title: "CSS (англ. Cascading Style Sheets -каскаддык стилдер жадыбалы) - белгилөө тили (HTML,XML) менен жазылган документтин тыш көрүнүшүн сүрөттөөчү формалдуу тил."
//   },
//   {
//     name: "SCSS",
//     image: Scss,
//     title: "Sass (англ. Syntactically Awesome Stylesheets) — метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей. Включён в состав языка разметки Haml."
//   },
//   {
//     name:"Java Script",
//     image: Js,
//     title: "JavaScript- көп парадигмалуу программалоо тили. Объектиге багытталган, императивдүү жана функциялык стилдерди колдойт. ECMAScript тилинин (ECMA-262-стандарты) ишке ашырылышы болуп саналат."
//   },
//   {
//     name: "React",
//     image: React,
//     title: "React - бул акысыз жана ачык булактуу алдыңкы JavaScript китепканасы компоненттеринин негизинде колдонуучу интерфейстерин куруу."
//   },
//   {
//     name: "Redux",
//     image: Redux,
//     title: "Redux бул ачык булак JavaScript китепканасы тиркемелердеги абалды башкаруу үчүн колдонулат жана Elm функционалдык тили таасир этет. Ал көбүнчө колдонуучу интерфейстерин түзүү үчүн React же Angular сыяктуу башка китепканалар менен бириктирилет. "
//   },
//   {
//     name: "MUI",
//     image: Mui,
//     title: "Magic User Interface (MUI) – бул Стефан Штунц тарабынан графикалык колдонуучу интерфейсин түзүү жана иштетүү үчүн иштелип чыккан объектке багытталган система."
//   }
// ]

const Course = () => {
  return (
    <div>
      <section className="sectionCourse">
        <div className="container">
          <div className="section__wrapper">
            <h1>Биздин баардык курстар</h1>
            <p>
              Кесипке ээ болууну каалагандар үчүн программалоо курстары, нөлдөн
              үйрөнүп, карьераңызда жаңы деңгээлге жет!
            </p>
          </div>
        </div>
      </section>

      {/* /////////////  Front-End  ///////////////// */}
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1
              className="sm:text-4xl text-2xl font-semibold 
      font-sans title-font mb-2 text-gray-900"
            >
              Биздин баардык курстар:
            </h1>
            <p className="lg:w-1/2 w-full font-sans  text-3xl leading-relaxed text-gray-500">
              Front-End
            </p>
          </div>
          <Curs />

          <a href="https://api.whatsapp.com/send?phone=996702038656">
            <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded font-sans  text-lg">
              Толук маалымат
            </button>
          </a>
        </div>
      </section>

      {/* /////////////  Back-End  ///////////////// */}
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <p className="lg:w-1/2 w-full font-sans  text-3xl leading-relaxed text-gray-500">
              Back-End
            </p>
          </div>
          <BackEnd />
          <a href="https://api.whatsapp.com/send?phone=996702038656">
            <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded font-sans  text-lg">
              Толук маалымат
            </button>
          </a>
        </div>
      </section>

      {/* /////////////  Kids  ///////////////// */}
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <p className="lg:w-1/2 w-full text-3xl font-sans  leading-relaxed text-gray-500">
              Жаш балдар курсу
            </p>
          </div>
          <Curs2 />
          <a href="https://api.whatsapp.com/send?phone=996702038656">
            <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded font-sans  text-lg">
              Толук маалымат
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Course;
