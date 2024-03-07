import React from 'react';
import './Teacher.scss';
import Teacher1 from "../../assets/image/photo_2024-02-23_14-13-23.jpg"
import TeacherKutman from "../../assets/image/js-front.png"
import TeacherBayastan from "../../assets/image/english.png"
import TeacherCarusel from '../../components/TeacherCarusel/TeacherCarusel';
import Mentors from '../../components/Mentors/Mentors';

const teacher = [
  {
    image: Teacher1,
    age: "20",
    name: "Жусупбек кызы Айседеп",
    compani: "Фрилансер",
    skill: "Жумуш тажырыйбасы - 3.5 жыл"
  },
  {
    image: TeacherKutman,
    age: "30",
    name: "Акунов Кутман",
    compani: "Иштеген компаниялары: Mancho Devs, Ivt Lab, Госфиннадзор, Минобразование.",
    skill: "Жумуш тажырыйбасы - 6 жыл"
  },
  {
    image: TeacherBayastan,
    age: "30",
    name: "Акматалиев Баястан",
    compani: "Иштеген компаниялары: Sigma software Solution, Novay - Norma, Mancho Devs.",
    skill: "Жумуш тажырыйбасы - 4 жыл"
  },
  {
    image: Teacher1,
    age: "20",
    name: "Жусупбек кызы Айседеп",
    compani: "Фрилансер",
    skill: "Жумуш тажырыйбасы - 3.5 жыл"
  },
  {
    image: TeacherKutman,
    age: "30",
    name: "Акунов Кутман",
    compani: "Иштеген компаниялары: Mancho Devs, Ivt Lab, Госфиннадзор, Минобразование.",
    skill: "Жумуш тажырыйбасы - 6 жыл"
  },
  {
    image: TeacherBayastan,
    age: "30",
    name: "Акматалиев Баястан",
    compani: "Иштеген компаниялары: Sigma software Solution, Novay - Norma, Mancho Devs.",
    skill: "Жумуш тажырыйбасы - 4 жыл"
  }
]

const Teacher = () => {
  return (
    <>
      <section className='section__teacher'>
        <div className="container">
          <div className="teacher__wrapper">
            <div className="teacher__relative">
              <div className='teacher__bgi'>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='text__teacher__logo'>
          <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">Мугалимдер</h1>
          <p className="leading-relaxed text-xl mb-3">Тажрыйбалуу окутуучулар IT компанияларда иштеп чыгуучулар болуп иштешет</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {
              teacher.map(el => (
                <div className=" teacher__hover p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-80 md:h-36 w-full object-cover object-center" src={el.image} alt="blog" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{el.name}</h1>
                      <p className="leading-relaxed mb-3">{el.compani}</p>
                      <p className="leading-relaxed mb-3">{el.skill}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-black inline-flex items-center md:mb-2 lg:mb-0">{el.age} жашта
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <TeacherCarusel/>
      <div className='flflflf'>
        <Mentors/>
      </div>
    </>
  );
}

export default Teacher;
