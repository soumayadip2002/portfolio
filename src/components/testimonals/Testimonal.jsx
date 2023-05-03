import React from "react";
import "./testimonal.css";
import PIC1 from "../../img/pic-1.png";
import PIC2 from "../../img/pic-2.png";
import PIC3 from "../../img/pic-3.png";
import PIC4 from "../../img/pic-4.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const client = [
  {
    id: 1,
    image: PIC1,
    name: "jhone deo",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae iure maiores, nesciunt recusandae illo?",
  },
  {
    id: 2,
    image: PIC2,
    name: "akash saha",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae iure maiores, nesciunt recusandae illo?",
  },
  {
    id: 3,
    image: PIC3,
    name: "soumya saha",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae iure maiores, nesciunt recusandae illo?",
  },
  {
    id: 4,
    image: PIC4,
    name: "wally west",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae iure maiores, nesciunt recusandae illo?",
  },
];
const Testimonal = () => {
  return (
    <section id="testimonals">
      <h5>review from clients</h5>
      <h2>testimonals</h2>

      <Swiper slidesPerView={1} spaceBetween={40} pagination={{clickable:true}}  modules={[Pagination]} loop={true} className="container testimonal_container">
        {client.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonal">
              <div className="client_avatar">
                <img src={image} alt="" />
              </div>

              <h5>{name}</h5>

              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonal;
