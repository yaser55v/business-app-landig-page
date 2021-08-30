import React from "react"
import { data } from "../assets/links"
import { Link } from "gatsby"
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div>
      <ul
        className={
          isOpen ? "bg-bink-light flex flex-col py-7 text-center items-center" : "hidden"
        }
        onClick={toggle}
        onKeyDown={toggle}
        role='presentation'
      >
        {data.map(item => {
          return (
            <li className='mb-5' key={item.id}>
              <Link
                to={item.url}
                aria-label={item.label}
                className={item.style}
              >
                {" "}
                {item.text}{" "}
              </Link>
            </li>
          )
        })}
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
  )
}

export default Dropdown

/* <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu className="text-bink-108 w-6 h-6 cursor-pointer" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 z-20  inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="p-5 border rounded shadow-sm bg-bink-light">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="logo" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          className="w-5 text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="flex flex-col items-center space-y-4">
                      {data.map(item => {
                        return (
                          <li key={item.id}>
                            <Link
                              to={item.url}
                              
                              aria-label={item.label}
                              className={item.style}
                            >
                              {" "}
                              {item.text}{" "}
                            </Link>
                          </li>
                        )
                      })}
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
                  </nav>
                </div>
              </div>
            )}
          </div> */
