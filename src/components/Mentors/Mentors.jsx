import React from 'react'
import SanjarImg from "../../assets/image/sangar.png"
import SimkaImg from "../../assets/image/syimyk-mentor.png"
import Abdurozik from "../../assets/image/mentors 1.png"
import "./Mentors.scss"

const mentor = [
    {
        image: SanjarImg,
        name: "Кайраткелдиев Санжар"
    },
    {
        image: SimkaImg,
        name: "Токтобек уулу Сыймык"
    },
    {
        image: Abdurozik,
        name: "Толгоев Алишер"
    }
]

const Mentors = () => {
  return (
    <section style={{backgroundColor: "white", marginBottom: "-100px"}} class="text-gray-600 mentor body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Менторлор</h1>
    </div>
    <div style={{justifyContent: "center"}} class="flex flex-wrap -m-4">
        {
            mentor.map(el => (
      <div style={{border: "1px solid red"}} class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={el.image}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">{el.name}</h2>
          </div>
        </div>
      </div>
            ))
        }
    </div>
  </div>
</section>
  )
}

export default Mentors