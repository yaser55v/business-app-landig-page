import React from "react";
import { Icons } from "../assets/FeaturesIcons";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
const Features = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <LightSpeed left>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
            <h2 className="font-bold text-4xl leading-10 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className="text-base font-normal text-t-light md:text-lg mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              bibendum eget morbi dignissim eu pharetra consequat montes,
              sagittis.
            </p>
          </div>
        </LightSpeed>

        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Icons.map((Icon, index) => {
            return (
              <Fade left key={index}>
                <div
                  className="flex flex-col justify-between p-5 hover:shadow-lg rounded-lg transition-shadow"
                  key={index}
                >
                  <div>
                    <div className="flex items-center w-16 h-16 mb-4 ">
                      <img src={Icon.ImgUrl} alt={Icon.title} />
                    </div>
                    <h6 className="mb-2 font-bold text-xl text-gray-800">
                      {Icon.title}
                    </h6>
                    <p className="mb-3 font-normal text-sm text-gray-400 w-36">
                      {" "}
                      {Icon.text}{" "}
                    </p>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
