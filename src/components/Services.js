import React from "react"
import CardOne from '../assets/images/card-1.png'
import CardTow from '../assets/images/card-2.png'
import CardThree from '../assets/images/card-3.png'
import CardFour from '../assets/images/card-4.png'
import Arrow from '../assets/images/icons/Arrow-Right.svg'
const Services = () => {
  return (
    <section className="bg-v-bink">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10  sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-bold rounded-full bg-teal-accent-400">
          Our Services
          </p>
          <p className="text-base text-gray-400 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div className="transform transition duration-500 hover:scale-110">
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 ">
              <img
                className="absolute object-cover w-full h-full rounded "
                src={CardOne}
                alt="Person"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium tracking-wider uppercase text-gray-700">Lorem ipsum dolor sit amet</p>
            <img src={Arrow} alt="" className="w-9 cursor-pointer" />
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-110">
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={CardTow}
                alt="Person"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium tracking-wider uppercase text-gray-700">Lorem ipsum dolor sit </p>
            <img src={Arrow} alt="" className="w-9 cursor-pointer" />
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-110">
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={CardThree}
                alt="Person"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium tracking-wider uppercase text-gray-700">Lorem ipsum dolor sit </p>
            <img src={Arrow} alt="" className="w-9 cursor-pointer" />
            </div>
          </div>
          <div className="transform transition duration-500 hover:scale-110">
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={CardFour}
                alt="Person"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-xl font-medium tracking-wider uppercase text-gray-700">Lorem ipsum dolor </p>
            <img src={Arrow} alt="" className="w-9 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
