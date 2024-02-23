import React, { useRef, useState } from "react";
import Mansur from "./images/mansur.png";
import Sanjar from "./images/sanjar.png";
import Uluk from "./images/uluk.png";
import Munar from "./images/munar.png";

import { useInView, motion } from "framer-motion";
import "./About.scss";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function About({ children }) {


  const [isLoaded, setIsLoaded] = useState(false);
  const [InView, setInView] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className="main">
      <div className="bg-image">
        <div className="container">
          <section className="section">
            <div className="texts" >
              <h1>
                OKURMEN IT программалоо тилдерин
              </h1>
              <p style={{opacity:"0.6",fontSize:"20"}}>
                Тажырыйбанын негизинде биз идеалдуу курстун программасын <br />{" "}
                туздук, курстан кийин сиз ‘разработчик’ болуп компанияда <br />{" "}
                иштесениз болот.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="container">
      <div className="update">
        <div className="updateTxt">
          <p className="important" style={{fontWeight:"600",fontSize:"20"}}>
            <span className="okurmen">ОКУРМЭН </span>{" "}
            <span>- бул өнүктүрүүчү чөйрө!</span>
          </p>
          <div className="updateP">
            <p>
              ОКУРМЭН окуу борбору - бул дүйнө жүзүндө актуалдуу болуп жактан IT
              тармагында билиим берүүчү <br /> академия. Биз Front-End, Back-End
              жана Flutter курстарын онлайн жана офлайн форматта окутабыз.
              <br /> Биздин максат - 2030 жылга чейин 100000 мыкты IT адистерин
              даярдоо жана КРны <br /> санариптештешкен мамлекеттердин катарына
              кошуу. Студенттерге сапатуу билим берүү менен
              <br /> мыкты кадр кылып даярдап, аларды максатына жеткирүү.
              <br /> Окурмэн окуу борбору 2022 - жылы май айында негизделген.
              Азыркы учурда командабызда 30дан
              <br /> ашуун киши эмгектенет. Кеңсебиз Бишкек шаарында жана дүйнө
              жүзү боюнча кыргыз тилинде
              <br /> билим алгысы келген студентер онлайн форматында окушат.
              <br /> Бүгүнкү күндө студенттерибиз окууну ийгиликтүү аяктап, IT
              адистери болуп иштей баштады.
  
            </p>
          </div>
        </div>
      </div>
      </div>

      
      <div className="container">
      <div className="four_boxes">
        <div className="box">
          <motion.div
            initial={false}
            animate={
              isLoaded && InView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
          >
            <img
              src={Mansur}
              alt="Mansur-Bek Kannazar"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          <p style={{fontSize:"25px"}}>Мансур-Бек Канназар</p>
          <p>Башкы Негиздоочу</p>
        </div>
        <div className="box">
          <motion.div
            initial={false}
            animate={
              isLoaded && InView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
          >
            <img
              src={Sanjar}
              alt="Sanjarbek Madumarov"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          <p style={{fontSize:"25px"}}>Санжарбек Мадумаров</p>
          <p>Директор</p>
        </div>
        <div className="box">
          <motion.div
            initial={false}
            animate={
              isLoaded && InView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
          >
            <img
              src={Uluk}
              alt="Sanjarbek Madumarov"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          <p style={{fontSize:"25px"}}>Улукбек Бакыбек уулу</p>
          <p>Директор орун басары</p>
        </div>
        <div className="box">
          <motion.div
            initial={false}
            animate={
              isLoaded && InView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
          >
            <img
              src={Munar}
              alt="Sanjarbek Madumarov"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
          <p style={{fontSize:"25px"}}>Мунарбек Мавлянов</p>
          <p>Okurmen_Kids директору</p>
        </div>
      </div>
      <div className="ReelsOfOkurmen">
        <iframe
          width="100%"
          height="700"
          class="yt-video"
          src="https://www.youtube.com/embed/nR7XkTWi9tM?si=HerVxcqeYYQPT7y9?autoplay=1&vq=hd1080"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      </div>
    </main>
  );
}

export default About;
