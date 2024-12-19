import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../data/testimonials";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const testimonials1 = [testimonials[0], testimonials[1], testimonials[2]];
  const testimonials2 = [testimonials[3], testimonials[4], testimonials[5]];
  const testimonials3 = [testimonials[6], testimonials[7], testimonials[8]];

  return (
    <section id="testimonials">
      <h3>Depoimentos</h3>
      <div id="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="testimonial-container">
              {testimonials1.map((testimonial) => (
                <div className="testimonial-item" key={testimonial.id}>
                  <div className="testimonial-content">
                    <div className="testimonial-img-container">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="avatar"
                      />
                    </div>
                    <h5>{testimonial.name}</h5>
                    <div className="testimonial-p-container">
                      <p>
                        <span className="marks">"</span>
                        {testimonial.story}
                      </p>
                    </div>
                    <img
                      src="/5-stars.png"
                      alt="5 estrelas"
                      className="rating"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-container">
              {testimonials2.map((testimonial) => (
                <div className="testimonial-item" key={testimonial.id}>
                  <div className="testimonial-content">
                    <div className="testimonial-img-container">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="avatar"
                      />
                    </div>
                    <h5>{testimonial.name}</h5>
                    <div className="testimonial-p-container">
                      <p>
                        <span className="marks">"</span>
                        {testimonial.story}
                      </p>
                    </div>
                    <img
                      src="/5-stars.png"
                      alt="5 estrelas"
                      className="rating"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-container">
              {testimonials3.map((testimonial) => (
                <div className="testimonial-item" key={testimonial.id}>
                  <div className="testimonial-content">
                    <div className="testimonial-img-container">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="avatar"
                      />
                    </div>
                    <h5>{testimonial.name}</h5>
                    <div className="testimonial-p-container">
                      <p>
                        <span className="marks">"</span>
                        {testimonial.story}
                      </p>
                    </div>
                    <img
                      src="/5-stars.png"
                      alt="5 estrelas"
                      className="rating"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
