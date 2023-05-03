import React from "react";
import "./testimonal.css";
import PIC1 from "../../img/web.jpg";
import PIC2 from "../../img/data.jpg";
import PIC3 from "../../img/communication.jpg";
import PIC4 from "../../img/ethics.jpg";
import PIC5 from "../../img/IOT.jpg";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const client = [
  {
    id: 1,
    image: PIC1,
  },
  {
    id: 2,
    image: PIC2,
  },
  {
    id: 3,
    image: PIC3,
  },
  {
    id: 4,
    image: PIC4,
  },

  {
    id: 5,
    image: PIC5,
  },
];
const Testimonal = () => {
  return (
    <section id="testimonals">
      <h5>My Achievements</h5>
      <h2>Certificates</h2>

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
        modules={[Autoplay,Pagination]}
        loop={true}
        className="container testimonal_container"
      >
        {client.map(({ id, image }) => {
          return (
            <SwiperSlide key={id} className="testimonal">
              <div className="client_avatar">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonal;
