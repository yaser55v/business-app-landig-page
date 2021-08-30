import React from "react"
import logo from "../assets/images/Logo.svg"
import { data } from "../assets/links"
import { Link } from "gatsby"
import { FiSearch } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
const Header = ({ toggle, isOpen }) => {
  const [showModal, setShowModal] = React.useState(true)
  return (
    <>
      <header className="">
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-red-700">
                      IMPORTANT NOTE!
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-red-500 text-lg leading-relaxed">
                      This site is only for eductional and advertising purposes and has nothing
                      to do with{" "}
                      <strong className="underline">
                        REALITY OR COMMERCIAL
                      </strong>{" "}
                      purposes.
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className="px-4 z-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} alt="logo" />
            </a>
            <GiHamburgerMenu
              onClick={toggle}
              className={
                !isOpen
                  ? "text-bink-108 text-4xl cursor-pointer lg:hidden"
                  : "hidden"
              }
            />
            <FaTimes
              className={
                isOpen
                  ? "text-bink-108 text-4xl cursor-pointer lg:hidden"
                  : "hidden"
              }
              onClick={toggle}
            />
            <ul className="items-center hidden space-x-14 lg:flex">
              <li className="space-x-9">
                {data.map(item => {
                  return (
                    <Link
                      to={item.url}
                      key={item.id}
                      aria-label={item.label}
                      className={item.style}
                    >
                      {" "}
                      {item.text}{" "}
                    </Link>
                  )
                })}
              </li>
            </ul>
            <ul className=" items-center hidden space-x-8 lg:flex">
              <FiSearch className="text-bink-108 w-6 h-6 cursor-pointer" />
              <li>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-9 w-24 px-6 bg-bink-108 font-medium text-xs tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-opacity-75 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  iSERVICE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
