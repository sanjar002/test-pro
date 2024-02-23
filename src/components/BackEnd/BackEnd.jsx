import { useState } from 'react';
import Python from '../../pages/course/images/python.png';
import Django from '../../pages/course/images/django.png';
import "../../pages/course/Course.scss";

const front = [
    {
      name: "Python",
      image: Python,
      title: "Python - иштеп чыгуучунун өндүрүмдүүлүгүнө жана коддун окумдуу болушуна багытталган жогорку даражалуу, жалпы милдеттерди аткарууга арналган программалоо тили. Python өзөгүнүн синтаксиси - минималдаштырылган. Ошол эле учурда, стандарттуу китепканасы көптөгөн пайдалуу функцияларды камтыйт.",
      id: 1
    },
    {
      name: "Django",
      image: Django,
      title: "Django — Python тилиндеги веб-колдонмолор үчүн эркин фреймворк. MVC долбоорлоо калыбын колдонот. Долбоорду Django Software Foundation уюму колдойт.",
      id: 2
    }
];

const BackEnd = () => {
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
         

          <div className="flex flex-wrap justify-center">
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
                  <span style={{textDecoration: "underline"}}
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

export default BackEnd;
