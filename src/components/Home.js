import React from "react"
import hero from "../assets/images/hero.png"
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <main>
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <Fade left>
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="max-w-lg mb-6 text-3xl font-black leading-none tracking-wider text-t-dark sm:text-6xl sm:leading-tight">
                Lorem ipsu 
                <br className="block" />
                lorem ipsm do
              </h2>
              <p className="text-base font-normal text-t-light md:text-lg">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </p>
            
              <div className="flex flex-col sm:space-x-8 items-center md:flex-row mt-9">
              <a
                href="/"
                className="inline-flex mb-4 md:mb-0 items-center justify-center h-11 w-40 uppercase bg-bink-108 font-medium text-xs tracking-wider text-white transition duration-200 shadow-md hover:bg-opacity-75 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Apply Online
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center justify-center uppercase font-medium text-xs tracking-wider h-11 w-40 border  border-bink-108 text-bink-108 shadow-sm hover:shadow-lg"
              >
                Apply Offline
              </a>
            </div>
            <div className="inline-flex items-center justify-between space-x-2 mt-44">
            <FiPhoneCall className="w-9 h-6 text-bink-108 cursor-pointer" /> 
            <p className="border-r-2 border-gray-400 pr-4">12222</p>
            <FaFacebookF className="w-9 h-6 text-blue-500 cursor-pointer"/> 
            <FaYoutube className="w-9 h-6 text-red-500 cursor-pointer"/>
             <FaLinkedin className="w-9 h-6 text-blue-700 cursor-pointer"/> 
             <FaInstagram className="w-9 h-6 text-bink-108 cursor-pointer"/>
        </div>
          </div>
          </Fade>
        </div>
        <div className="hidden md:block">
        <div className=" inset-y-0 top-0 right-0 w-full bg-bink-light max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-contain w-full h-56 md:h-96 lg:h-full"
            src={hero}
            alt=""
          />
        </div>
        </div>
      </div>
    </main>
  )
}

export default Home
