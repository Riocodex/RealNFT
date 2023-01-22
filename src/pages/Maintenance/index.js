import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Countdown from 'react-countdown'
import StyleSwitcher from '../../components/StyleSwitcher'
import { lightLogo, bg04 } from '../../components/imageImport'

const Maintenance = () => {
  var dt = new Date();
  const time = dt.setHours(dt.getHours() + 1);
  return (
    <>
      <div className="back-to-home">
        <a
          href=""
          onClick={e => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      <section
        className="position-relative"
        style={{ background: `url(${bg04}) bottom` }}
      >
        <div className="bg-overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/* Start Logo */}
                <div className="text-center">
                  <a href="">
                    <img src={lightLogo} alt="" />
                  </a>
                </div>
                {/* End Logo */}

                {/* Start Content */}
                <div className="title-heading text-center my-auto">
                  <h4 className="text-white display-5 fw-bold mb-4">
                    Site is under maintenance
                  </h4>
                  <p
                    className="text-white-50 para-desc mx-auto mb-4"
                    style={{
                      letterSpacing: 'unset',
                    }}
                  >
                    Our design projects are fresh and simple and will benefit
                    your business greatly. Learn more about our work!
                  </p>

                  <Countdown
                    date={time}
                    renderer={({ days, hours, minutes, seconds }) => (
                      <span id="maintenance" className="timer h1 text-white">
                        {minutes}:{seconds}
                      </span>
                    )}
                  />

                  <span className="d-block h6 text-uppercase text-white-50">
                    Minutes
                  </span>
                </div>
                {/* End Content */}

                {/* Start Footer */}
                <div className="text-center">
                  <small className="mb-0 text-light title-dark">
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    Superex. Design & Develop with{' '}
                    <i className="mdi mdi-heart text-danger"></i> by{' '}
                    <a
                      href="https://shreethemes.in/"
                      target="_blank"
                      className="text-reset"
                    >
                      Shreethemes
                    </a>
                    .
                  </small>
                </div>
                {/* End Footer */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}

      {/* Style switcher  */}
      <StyleSwitcher />

      {/* End */}
    </>
  )
}

export default Maintenance
