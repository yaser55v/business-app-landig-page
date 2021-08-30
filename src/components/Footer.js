import React from "react"
import { FiPhoneCall } from "react-icons/fi"
import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-3/12">
            <div className="px-6">
              <div>
                <a
                  href="/"
                  className="text-xl font-bold text-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  About the company
                </a>
              </div>

              <p className="w-44 mt-2 text-sm leading-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </p>

              <div className="flex mt-8 -mx-2">
                <FaFacebookF className="w-9 h-6 text-blue-500 cursor-pointer" />
                <FaYoutube className="w-9 h-6 text-red-500 cursor-pointer" />
                <FaLinkedin className="w-9 h-6 text-blue-700 cursor-pointer" />
                <FaInstagram className="w-9 h-6 text-bink-108 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase ">Products</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum dolor 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum dolor 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem 
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">Get Started</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Career
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Contact Us
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Examples
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">About</h3>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum dolor
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                 Lorem ipsum dolor 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum 
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  Lorem ipsum 
                </a>
              </div>

              <div className="flex">
                <FiPhoneCall className="w-9 h-6 text-bink-108 cursor-pointer" />
                12222
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="bg-gray-700 text-white block p-4"
        href="https://www.figma.com/community/file/979352497651444515/Banking-Website-Landing-Page-Freebie"
        target="_blank"
        rel="noreferrer"
      >
        Figma Source Banking-Website-Landing-Page-Freebie
      </a>
    </footer>
  )
}

export default Footer
