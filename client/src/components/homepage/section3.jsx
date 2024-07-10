import React from "react";
import people1 from "/src/assets/images/sm/section3/image1.png";
import people2 from "/src/assets/images/sm/section3/image2.png";
import people3 from "/src/assets/images/sm/section3/image3.png";

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

  return (
    <section className="xl:w-full xl:h-[742px] sm:w-full sm:h-auto border-2 border-red-700 flex flex-col items-center">
      <h1 className="text-black sm:font-medium sm:text-2xl sm:text-center xl:mt-[109px] xl:font-medium xl:text-4xl text-center">
        Our Graduates
      </h1>
      <div className="sm:mt-8 xl:flex xl:items-center xl:justify-center xl:mt-[60px]">
      <div className="sm:justify-center sm:flex sm:flex-col  sm:mb-12 sm:w-[312px] xl:px-0 xl:w-[737.76px] xl:h-[311.33px] border-2 border-violet-700">
          <div className="bg-blue-100 sm:pb-10 sm:w-full sm:h-auto xl:w-[578.78px] xl:h-[309.48px] xl:flex xl:justify-center xl:items-center xl:ml-auto">
            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center xl:flex xl:flex-row xl:items-center xl:justify-center">
              <img
                src={people1}
                alt="Saiful Islam"
                className="sm:w-[248px] sm:h-[297.99px]  xl:h-[240px] "
              />
              <div className="text-black xl:w-[481.14px] xl:h-[174px] xl:flex xl:items-center xl:justify-center">
                <div className="sm:mt-[14px] sm:px-6 xl:mt-0 xl:px-6">
                  <h1 className="sm:font-normal sm:text-xl xl:text-2xl xl:font-medium">
                    Saiful Islam
                  </h1>
                  <p className="sm:mt-2 sm:font-normal sm:text-sm text-gray-700 xl:mt-6 xl:text-base xl:font-normal">
                    Start with something simple and small, then expand over time. If people call it a ‘toy’ you’re definitely onto something. If you’re waiting for encouragement from others, you’re doing it wrong. By the time people think an idea is good, it’s probably too late.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;