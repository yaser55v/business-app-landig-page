import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../assets/images/Group-1.png";
import Mony from "../assets/images/mony.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="bg-v-bink text-center pt-20">
        <p className="text-2xl text-gray-600 font-normal tracking-widest">
          BUSINESS PARTNERS
        </p>
        <Slider {...settings} className="py-10">
          <div className=" custom-me">
            <img src={Img} alt="" />
          </div>
          <div className=" custom-me">
          <img src={Img} alt="" />
          </div>
          <div className=" custom-me">
          <img src={Img} alt="" />
          </div>
          <div className=" custom-me">
          <img src={Img} alt="" />
          </div>
        </Slider>
      </section>
      <section className="">
        <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-0 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:left-0 lg:items-center">
            <img
              src={Mony}
              className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
              alt=""
            />
          </div>
          <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="text-lg font-normal leading-loose text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci deleniti numquam temporibus ex? Cum itaque libero,
                  iste error eligendi accusantium eaque quod deserunt
                  praesentium nemo ex dolorem incidunt doloribus, ipsum quasi?
                  Odio quas repellendus animi? Atque eos velit magni quam
                  veritatis eaque ducimus debitis ab obcaecati suscipit tenetur
                  earum iste quos assumenda, rerum ex dolores temporibus,
                  laboriosam voluptate cum! Hic pariatur quis quaerat. Fuga, vel
                  dolores nisi impedit maiores maxime, aspernatur similique et
                 
                </p>
              </div>
              <div className="flex items-center mt-14">
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-bink-108 hover:text-opacity-75"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
