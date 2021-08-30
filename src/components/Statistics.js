import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
const Statistics = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center  md:mb-12">
          <h2 className="font-bold text-4xl leading-10 text-gray-800">
          Lorem ipsum dolor sit amet
          </h2>
          <p className=" text-center text-base font-normal text-t-light md:text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 mb-14">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-bink-108">
              <CountUp
                start={10}
                end={57.6}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8">
            Lorem ipsum dolor 
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={0}
                end={0.95}
                duration={3}
                separator=" "
                decimals={2}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8">
            Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={20}
                end={388.5}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600  mb-8uppercase">
            Lorem ipsum dolor sit 
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={17}
                end={50.4}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8 uppercase">
            Lorem ipsum 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={0}
                end={6.1}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8 uppercase">
            Lorem ipsum 
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={0}
                end={18.51}
                duration={2.75}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8 uppercase">
            Lorem ipsum dolor 
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={0}
                end={8.5}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8 uppercase">
            Lorem ipsum dolor
            </p>
          </div>
          <div className="text-center">
          <div className="text-center">
            <h6 className="text-3xl font-bold hover:text-bink-108">
              <CountUp
                start={0}
                end={68.5}
                duration={2}
                separator=" "
                decimals={1}
                decimal="."
                suffix=" %"
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h6>
            <p className="text-base font-normal leading-10 text-gray-600 mb-8 uppercase">
            Lorem ipsum dolor
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
