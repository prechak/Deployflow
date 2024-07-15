import React from "react";
import Slider from "react-slick";
import people1 from "/src/assets/images/sm/section3/image1.png";
import people2 from "/src/assets/images/sm/section3/image2.png";
import people3 from "/src/assets/images/sm/section3/image3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section3() {
  const people = [
    {
      name: "Saiful Islam",
      image: people1,
      description:
        "Start with something simple and small, then expand over time. If people call it a ‘toy’ you’re definitely onto something. If you’re waiting for encouragement from others, you’re doing it wrong. By the time people think an idea is good, it’s probably too late.",
    },
    {
      name: "John Doe",
      image: people2,
      description:
        "Innovation is the key to success. Always stay curious and never stop learning. By the time you realize it, you’ll be ahead of the curve.",
    },
    {
      name: "Jane Smith",
      image: people3,
      description:
        "Perseverance and dedication are essential. Keep pushing your limits and challenging yourself. The journey is just as important as the destination.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className=" sm:w-full sm:h-[716px] md:w-full md:h-[742px] xl:w-full xl:h-[742px] flex flex-col items-center">
      <h1 className="text-black text-center sm:font-medium sm:text-2xl sm:text-center md:mt-[109px] md:font-medium md:text-4xl xl:mt-[109px] xl:font-medium xl:text-4xl ">
        Our Graduates
      </h1>
      <div className="sm:mt-8 md:flex md:items-center md:justify-center md:mt-[60px] xl:flex xl:items-center xl:justify-center xl:mt-[60px]">
        <Slider
          {...settings}
          className="sm:rounded-lg sm:w-[296px] sm:h-[534px] md:w-[737.76px] md:h-[311.33px] xl:w-[737.76px] xl:h-[311.33px]"
        >
          {people.map((person, index) => (
            <div
              key={index}
              className="sm:w-[296px] sm:h-[534px] md:w-[578.78px] md:h-[309.48px] md:flex md:justify-center md:items-center xl:w-[578.78px] xl:h-[309.48px] xl:flex xl:justify-center xl:items-center bg-Blue-100 md:bg-white xl:bg-white rounded-lg"
            >
              <div className="sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row md:items-center md:justify-center xl:full md:h-[311.33px] xl:flex xl:flex-row xl:items-center xl:justify-center xl:full xl:h-[311.33px] ">
                <img
                  src={person.image}
                  alt={person.name}
                  className="sm:w-[248px] sm:h-[297.99px] md:h-[240px] md:w-[200px] md:relative md:left-10 xl:h-[240px] xl:w-[200px] xl:relative xl:left-10"
                />
                <div className="text-black bg-Blue-100 md:w-[578.78px] md:h-[309.48px] md:flex md:items-center md:justify-center md:pl-8 xl:w-[578.78px] xl:h-[309.48px] xl:flex xl:items-center xl:justify-center  xl:pl-8 ">
                  <div className="sm:mt-[14px] sm:w-[248px] sm:h-[206px] md:mt-0 md:px-6 md:w-[481.14px] md:h-[174px] xl:mt-0 xl:px-6 xl:w-[481.14px] xl:h-[174px]">
                    <h1 className="sm:font-normal sm:text-xl md:text-2xl md:font-medium md:w-[151.67px] md:h-auto xl:text-2xl xl:font-medium xl:w-[151.67px] xl:h-auto">
                      {person.name}
                    </h1>
                    <p className="text-gray-700 sm:mt-2 sm:font-normal sm:text-sm sm:w-[248px] sm:h-[168px] md:mt-6 md:text-base md:font-normal md:w-auto md:h-auto xl:mt-6 xl:text-base xl:font-normal xl:w-auto xl:h-auto">
                      {person.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Section3;
